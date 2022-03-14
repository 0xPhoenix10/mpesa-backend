import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataUpdateInput } from './meta-data-update.input';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';

@ArgsType()
export class UpdateOneMetaDataArgs {

    @Field(() => MetaDataUpdateInput, {nullable:false})
    data!: MetaDataUpdateInput;

    @Field(() => MetaDataWhereUniqueInput, {nullable:false})
    where!: MetaDataWhereUniqueInput;
}
