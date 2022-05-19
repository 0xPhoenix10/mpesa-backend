import { Controller, Post, UseInterceptors, UploadedFiles, Get, Query, Body, Res, Param, HttpException, HttpStatus } from '@nestjs/common';
import { StatsService } from './stats.service';
import { TransactionStatsDto } from './types/transaction-stats.dto';

@Controller('stats')
export class StatsController {
  constructor( 
    // private documentService: DocumentService, 
    // private labelService: LabelService,
    private statsService: StatsService,
  ){}


  @Post(':userId')
  async stats(@Query() query: TransactionStatsDto, @Param('userId') userId) {
    const { type } = query;
    console.log(type);

    try {
      switch (type) {
        case 'basic':
          const user = await this.statsService.stats(userId);
          const transactions = await this.statsService.transactionStats(userId);
          return {
            user,
            transactions,
          };
          break;
        case 'range':
          return await this.statsService.getByDate(userId, query.start, query.end);
          break;
        case 'search':
          return await this.statsService.searchByDescription(userId, query.search);
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
