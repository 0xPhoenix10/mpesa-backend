import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingCreateInput } from './billing-create.input';

@ArgsType()
export class CreateOneBillingArgs {

    @Field(() => BillingCreateInput, {nullable:false})
    data!: BillingCreateInput;
}
