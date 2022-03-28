import { Controller, Post, UseInterceptors, UploadedFiles, Get, Query, Body, Res } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { getDataFromPDF } from './services/tabula.service';
const fs = require('fs').promises;
import { toExcel } from './export/toExcel';
import { createReadStream } from 'fs';

@Controller('file')
export class DocumentController {

  @Post('uploadMultiFiles')
  @UseInterceptors(AnyFilesInterceptor({ dest:'./input' }))
  async uploadFileM(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return files;
  }

  @Get('getExcel.xlsx') 
  async excelFile(@Query() query, @Body() body, @Res() res) {
    const val: any = await getDataFromPDF(`./input/${query.filename}`, query.password, 'all');
    const path = `./output/${val.user.name.replaceAll(' ', '-')}.xlsx`;
    await toExcel(val,  path);
    const file = createReadStream(path);
    return file.pipe(res);

  }
}
