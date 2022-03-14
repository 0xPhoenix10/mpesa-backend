import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberUpdateInput } from './reference-number-update.input';
import { ReferenceNumberWhereUniqueInput } from './reference-number-where-unique.input';

@ArgsType()
export class UpdateOneReferenceNumberArgs {

    @Field(() => ReferenceNumberUpdateInput, {nullable:false})
    data!: ReferenceNumberUpdateInput;

    @Field(() => ReferenceNumberWhereUniqueInput, {nullable:false})
    where!: ReferenceNumberWhereUniqueInput;
}
