import { Controller, Post, UseInterceptors, UploadedFiles, Get, Query, Body, Res, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { getDataFromPDF } from './services/tabula.service';
const fs = require('fs').promises;
import { toExcel } from './export/toExcel';
import { createReadStream } from 'fs';
import { elastic } from './repositories/es.repository';
import { DocumentService } from './document.service';
import { TransactionStatsDto } from './transaction-stats.dto';

@Controller('file')
export class DocumentController {
  constructor( private documentService: DocumentService ){}


  @Post('uploadMultiFiles')
  @UseInterceptors(AnyFilesInterceptor({ 
    dest:'./input', 
  },
  ))
  async uploadMultiFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return files;
  }

  @Get('processDoc/:doc')
  async processDoc(@Query() query, @Res() res, @Param() params) {
    try {
      const [ filename ] = params.doc.split('.');
      const val: any = await getDataFromPDF(`./input/${filename}`, query.password, 'all');
      const setData = await elastic.mpesaTransactions(val, 'mpesa-transactions' );
      
      res.send({ userId: setData._id, name: val.user.name, phoneNumber: val.user.phoneNumber });
    } catch (err){
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('stats/:userId')
  async stats(@Query() query: TransactionStatsDto, @Param('userId') userId) {
    const { type } = query;

    try {
      switch (type) {
        case 'basic':
          const user = await this.documentService.stats(userId);
          const transactions = await this.documentService.transactionStats(userId);
          return {
            user,
            transactions,
          };
          break;
        case 'range':
          return this.documentService.getByDate(userId, query.start, query.end);
          break;
        case 'search':
          return this.documentService.searchByDescription(userId, query.search);
          break;
        default:
          throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
    } catch (err){
      console.error(err);
      if (err.Status !== HttpStatus.NOT_FOUND)
        throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('toExcel/:userId')
  async toExcel(@Query() query, @Res() res, @Param() params) {
    try {
      const [ userId ] = params.userId.split('.');
      const data = await this.documentService.excelData(userId);
      const path = `./output/${data.user.name.replaceAll(' ', '-')}.xlsx`;
      await toExcel(data,  path);
      const file = createReadStream(path);
      return file.pipe(res);
    } catch (err){
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
  }
}
