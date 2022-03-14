import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutTransactionInput } from './wallet-create-without-transaction.input';
import { WalletCreateOrConnectWithoutTransactionInput } from './wallet-create-or-connect-without-transaction.input';
import { WalletUpsertWithoutTransactionInput } from './wallet-upsert-without-transaction.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutTransactionInput } from './wallet-update-without-transaction.input';

@InputType()
export class WalletUpdateOneWithoutTransactionInput {

    @Field(() => WalletCreateWithoutTransactionInput, {nullable:true})
    create?: WalletCreateWithoutTransactionInput;

    @Field(() => WalletCreateOrConnectWithoutTransactionInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutTransactionInput;

    @Field(() => WalletUpsertWithoutTransactionInput, {nullable:true})
    upsert?: WalletUpsertWithoutTransactionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutTransactionInput, {nullable:true})
    update?: WalletUpdateWithoutTransactionInput;
}
