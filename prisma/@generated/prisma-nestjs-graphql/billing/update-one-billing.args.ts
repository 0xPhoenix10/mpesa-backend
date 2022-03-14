import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingUpdateInput } from './billing-update.input';
import { BillingWhereUniqueInput } from './billing-where-unique.input';

@ArgsType()
export class UpdateOneBillingArgs {

    @Field(() => BillingUpdateInput, {nullable:false})
    data!: BillingUpdateInput;

    @Field(() => BillingWhereUniqueInput, {nullable:false})
    where!: BillingWhereUniqueInput;
}
