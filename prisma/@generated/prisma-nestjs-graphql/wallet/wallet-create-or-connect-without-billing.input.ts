import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutBillingInput } from './wallet-create-without-billing.input';

@InputType()
export class WalletCreateOrConnectWithoutBillingInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutBillingInput, {nullable:false})
    create!: WalletCreateWithoutBillingInput;
}
