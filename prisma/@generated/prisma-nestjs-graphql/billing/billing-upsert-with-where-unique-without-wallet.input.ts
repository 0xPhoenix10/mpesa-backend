import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { BillingUpdateWithoutWalletInput } from './billing-update-without-wallet.input';
import { BillingCreateWithoutWalletInput } from './billing-create-without-wallet.input';

@InputType()
export class BillingUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => BillingWhereUniqueInput, {nullable:false})
    where!: BillingWhereUniqueInput;

    @Field(() => BillingUpdateWithoutWalletInput, {nullable:false})
    update!: BillingUpdateWithoutWalletInput;

    @Field(() => BillingCreateWithoutWalletInput, {nullable:false})
    create!: BillingCreateWithoutWalletInput;
}
