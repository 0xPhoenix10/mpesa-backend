import { Controller, Post, UseInterceptors, UploadedFiles, Get, Query, Body, Res, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { toExcel } from './export/toExcel';
import { createReadStream } from 'fs';
import { DocumentService } from './document.service';
import { TransactionStatsDto } from './types/transaction-stats.dto';
import { LabelService } from './services/getLabels.service';
import { labelQueue } from '../helpers/bullmq';

@Controller('stats')
export class StatsController {

  @Post(':userId')
  async stats(@Query() query: TransactionStatsDto, @Param('userId') userId) {
    const { type } = query;
    console.log(type);

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
          return await this.documentService.getByDate(userId, query.start, query.end);
          break;
        case 'search':
          return await this.documentService.searchByDescription(userId, query.search);
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

}
