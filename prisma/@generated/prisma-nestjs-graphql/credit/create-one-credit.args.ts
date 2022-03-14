import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditCreateInput } from './credit-create.input';

@ArgsType()
export class CreateOneCreditArgs {

    @Field(() => CreditCreateInput, {nullable:false})
    data!: CreditCreateInput;
}
