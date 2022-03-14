import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberWhereInput } from './reference-number-where.input';

@ArgsType()
export class DeleteManyReferenceNumberArgs {

    @Field(() => ReferenceNumberWhereInput, {nullable:true})
    where?: ReferenceNumberWhereInput;
}
