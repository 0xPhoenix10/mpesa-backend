import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';

@ArgsType()
export class FindUniqueMetaDataArgs {

    @Field(() => MetaDataWhereUniqueInput, {nullable:false})
    where!: MetaDataWhereUniqueInput;
}
