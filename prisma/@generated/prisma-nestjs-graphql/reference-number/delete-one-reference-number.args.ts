import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberWhereUniqueInput } from './reference-number-where-unique.input';

@ArgsType()
export class DeleteOneReferenceNumberArgs {

    @Field(() => ReferenceNumberWhereUniqueInput, {nullable:false})
    where!: ReferenceNumberWhereUniqueInput;
}
