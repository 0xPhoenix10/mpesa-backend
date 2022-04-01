import { Controller, Post, UseInterceptors, UploadedFiles, Get, Query, Body, Res, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { getDataFromPDF } from './services/tabula.service';
const fs = require('fs').promises;
import { toExcel } from './export/toExcel';
import { createReadStream } from 'fs';
import { elastic } from './repositories/es.repository';

@Controller('file')
export class DocumentController {
  @Post('uploadMultiFiles')
  @UseInterceptors(AnyFilesInterceptor({ 
    dest:'./input', 
  },
  ))
  async uploadMultiFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return files;
  }

  @Get('download/:doc') 
  async excelFile(@Query() query, @Res() res, @Param() params) {
    try {
      const [ filename ] = params.doc.split('.');
      const val: any = await getDataFromPDF(`./input/${filename}`, query.password, 'all');
      const path = `./output/${val.user.name.replaceAll(' ', '-')}.xlsx`;
      // send records to elasticSearch 
      elastic.multiDoc(val, 'mpesa-transactions' );

      // create excel file
      await toExcel(val,  path);
      const file = createReadStream(path);
      return file.pipe(res);
    } catch (err){
      // throw new Error('password incorrect');
      throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
    }
  }
}
