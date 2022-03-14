import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutTransactionInput } from './wallet-create-without-transaction.input';
import { WalletCreateOrConnectWithoutTransactionInput } from './wallet-create-or-connect-without-transaction.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutTransactionInput {

    @Field(() => WalletCreateWithoutTransactionInput, {nullable:true})
    create?: WalletCreateWithoutTransactionInput;

    @Field(() => WalletCreateOrConnectWithoutTransactionInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
