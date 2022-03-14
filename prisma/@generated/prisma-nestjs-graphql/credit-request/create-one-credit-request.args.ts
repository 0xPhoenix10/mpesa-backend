import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestCreateInput } from './credit-request-create.input';

@ArgsType()
export class CreateOneCreditRequestArgs {

    @Field(() => CreditRequestCreateInput, {nullable:false})
    data!: CreditRequestCreateInput;
}
