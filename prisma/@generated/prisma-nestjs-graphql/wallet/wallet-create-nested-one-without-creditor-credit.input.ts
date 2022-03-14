import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutCreditorCreditInput } from './wallet-create-without-creditor-credit.input';
import { WalletCreateOrConnectWithoutCreditorCreditInput } from './wallet-create-or-connect-without-creditor-credit.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutCreditorCreditInput {

    @Field(() => WalletCreateWithoutCreditorCreditInput, {nullable:true})
    create?: WalletCreateWithoutCreditorCreditInput;

    @Field(() => WalletCreateOrConnectWithoutCreditorCreditInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutCreditorCreditInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
