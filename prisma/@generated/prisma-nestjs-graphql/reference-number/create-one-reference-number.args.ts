import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReferenceNumberCreateInput } from './reference-number-create.input';

@ArgsType()
export class CreateOneReferenceNumberArgs {

    @Field(() => ReferenceNumberCreateInput, {nullable:false})
    data!: ReferenceNumberCreateInput;
}
