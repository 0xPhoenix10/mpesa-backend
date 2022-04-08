import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentResolver } from './document.resolver';
import { DocumentService } from './document.service';
import { StatsService } from './services/stats.service';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService, DocumentResolver, StatsService],
})
export class DocumentModule { }
