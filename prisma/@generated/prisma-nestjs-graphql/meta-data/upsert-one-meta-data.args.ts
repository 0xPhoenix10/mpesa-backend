import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';
import { MetaDataCreateInput } from './meta-data-create.input';
import { MetaDataUpdateInput } from './meta-data-update.input';

@ArgsType()
export class UpsertOneMetaDataArgs {

    @Field(() => MetaDataWhereUniqueInput, {nullable:false})
    where!: MetaDataWhereUniqueInput;

    @Field(() => MetaDataCreateInput, {nullable:false})
    create!: MetaDataCreateInput;

    @Field(() => MetaDataUpdateInput, {nullable:false})
    update!: MetaDataUpdateInput;
}
