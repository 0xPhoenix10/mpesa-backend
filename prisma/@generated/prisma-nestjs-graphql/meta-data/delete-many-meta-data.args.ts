import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataWhereInput } from './meta-data-where.input';

@ArgsType()
export class DeleteManyMetaDataArgs {

    @Field(() => MetaDataWhereInput, {nullable:true})
    where?: MetaDataWhereInput;
}
