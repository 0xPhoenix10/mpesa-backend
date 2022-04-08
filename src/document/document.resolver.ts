import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DocumentService } from './document.service';
import { DocumentInput } from './type/document.input';

@Resolver()
export class DocumentResolver {
  constructor(
    private readonly documentService: DocumentService,
  ) {
  }

  @Query(() => String)
  getStats(): string {
    return 'Hello World!';
  }

  // @Mutation(() => String)
  // documentAnalyse(
  //   @Args('input') input: DocumentInput,
  // ): Promise<string | any> {
  //   // return this.documentService.getDocumentDetailsS3(input);
  // }

 
}