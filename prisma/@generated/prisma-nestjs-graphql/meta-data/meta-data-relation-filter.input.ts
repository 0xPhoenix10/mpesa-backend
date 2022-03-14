import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MetaDataWhereInput } from './meta-data-where.input';

@InputType()
export class MetaDataRelationFilter {

    @Field(() => MetaDataWhereInput, {nullable:true})
    is?: MetaDataWhereInput;

    @Field(() => MetaDataWhereInput, {nullable:true})
    isNot?: MetaDataWhereInput;
}
