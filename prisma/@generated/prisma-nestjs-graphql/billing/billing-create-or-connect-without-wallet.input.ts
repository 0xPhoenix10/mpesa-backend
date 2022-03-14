import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { BillingCreateWithoutWalletInput } from './billing-create-without-wallet.input';

@InputType()
export class BillingCreateOrConnectWithoutWalletInput {

    @Field(() => BillingWhereUniqueInput, {nullable:false})
    where!: BillingWhereUniqueInput;

    @Field(() => BillingCreateWithoutWalletInput, {nullable:false})
    create!: BillingCreateWithoutWalletInput;
}
