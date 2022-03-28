import { Module } from '@nestjs/common';
import { DocumentController } from './document.controller';
import { DocumentResolver } from './document.resolver';
import { DocumentService } from './document.service';

@Module({
  controllers: [DocumentController],
  providers: [DocumentService, DocumentResolver],
})
export class DocumentModule { }
