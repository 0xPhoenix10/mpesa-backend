import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DocumentInput {
  @Field()
    password: string;

  @Field()
    key: string;

  @Field({ nullable: true })
    fileName: string;

  @Field({ nullable: true })
    documentType?: string;
}
