import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutBillingInput } from './wallet-create-without-billing.input';
import { WalletCreateOrConnectWithoutBillingInput } from './wallet-create-or-connect-without-billing.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutBillingInput {

    @Field(() => WalletCreateWithoutBillingInput, {nullable:true})
    create?: WalletCreateWithoutBillingInput;

    @Field(() => WalletCreateOrConnectWithoutBillingInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutBillingInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
