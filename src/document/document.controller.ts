import { Controller, Post, UseInterceptors, UploadedFiles, Get, Query, Body, Res, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { toExcel } from './export/toExcel';
import { createReadStream } from 'fs';
import { DocumentService } from './document.service';
import { TransactionStatsDto } from './types/transaction-stats.dto';
import { LabelService } from './services/getLabels.service';
import { labelQueue } from '../helpers/bullmq';

@Controller('file')
export class DocumentController {
  constructor( 
    private documentService: DocumentService, 
    private labelService: LabelService,
  ){}


  @Post('uploadMultiFiles')
  @UseInterceptors(AnyFilesInterceptor({ 
    dest:'./input', 
  },
  ))
  async uploadMultiFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return files;
  } 

  @Post('event')
  async event(@Query() query, @Res() res, @Param() params) {
    console.log('params:', params);
    console.log('query:', query);
    try {
      labelQueue.add('test', { id:'serds' });
      res.send('data');
    } catch (err){
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('processDoc/:doc')
  async processDoc(@Query() query, @Res() res, @Param() params) {
    try {
      console.log('start proccessing ');
      const data = await  this.documentService.processDoc( params.doc, query.password);
      res.send(data);
    } catch (err){
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('processStatus/:id')
  async processStatus(@Query() query, @Res() res, @Param() params) {
    try {
      const val = await this.labelService.check(params.id);
      res.send(val);
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
