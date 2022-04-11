import { Controller, Post, UseInterceptors, UploadedFiles, Get, Query, Body, Res, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { getDataFromPDF } from './services/tabula.service';
const fs = require('fs').promises;
import { toExcel } from './export/toExcel';
import { createReadStream } from 'fs';
import { elastic } from './repositories/es.repository';
import { DocumentService } from './document.service';

@Controller('file')
export class DocumentController {
  constructor( private documentService: DocumentService ){}


  @Post('uploadMultiFiles')
  @UseInterceptors(AnyFilesInterceptor({ 
    dest:'./input', 
  },
  ))
  async uploadMultiFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return files;
  }

  // @Get('download/:doc') 
  // async excelFile(@Query() query, @Res() res, @Param() params) {
  //   try {
  //     const [ filename ] = params.doc.split('.');
  //     const val: any = await getDataFromPDF(`./input/${filename}`, query.password, 'all');
  //     const path = `./output/${val.user.name.replaceAll(' ', '-')}.xlsx`;
  //     // send records to elasticSearch 
  //     elastic.mpesaTransactions(val, 'mpesa-transactions' );

  //     // create excel file
  //     await toExcel(val,  path);
  //     const file = createReadStream(path);
  //     return file.pipe(res);
  //   } catch (err){
  //     // throw new Error('password incorrect');
  //     throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
  //   }
  // }

  @Get('processDoc/:doc')
  async processDoc(@Query() query, @Res() res, @Param() params) {
    try {
      const [ filename ] = params.doc.split('.');
      const val: any = await getDataFromPDF(`./input/${filename}`, query.password, 'all');
      console.log('val:', val);
      const setData = await elastic.mpesaTransactions(val, 'mpesa-transactions' );
      res.send({ userId: setData._id, name: val.user.name, phoneNumber: val.user.phoneNumber });
    } catch (err){
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('stats/:userId')
  async stats(@Query() query, @Param() params) {
    // console.log('params:', params);
    // console.log('query:', query);
    try {
      return this.documentService.stats(params.userId);
    } catch (err){
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
