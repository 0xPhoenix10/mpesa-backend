import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';

@ArgsType()
export class DeleteOneMetaDataArgs {

    @Field(() => MetaDataWhereUniqueInput, {nullable:false})
    where!: MetaDataWhereUniqueInput;
}
