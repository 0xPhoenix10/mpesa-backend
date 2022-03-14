import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { BillingUpdateWithoutWalletInput } from './billing-update-without-wallet.input';

@InputType()
export class BillingUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => BillingWhereUniqueInput, {nullable:false})
    where!: BillingWhereUniqueInput;

    @Field(() => BillingUpdateWithoutWalletInput, {nullable:false})
    data!: BillingUpdateWithoutWalletInput;
}
