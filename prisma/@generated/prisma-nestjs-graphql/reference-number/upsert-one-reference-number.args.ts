import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberWhereUniqueInput } from './reference-number-where-unique.input';
import { ReferenceNumberCreateInput } from './reference-number-create.input';
import { ReferenceNumberUpdateInput } from './reference-number-update.input';

@ArgsType()
export class UpsertOneReferenceNumberArgs {

    @Field(() => ReferenceNumberWhereUniqueInput, {nullable:false})
    where!: ReferenceNumberWhereUniqueInput;

    @Field(() => ReferenceNumberCreateInput, {nullable:false})
    create!: ReferenceNumberCreateInput;

    @Field(() => ReferenceNumberUpdateInput, {nullable:false})
    update!: ReferenceNumberUpdateInput;
}
