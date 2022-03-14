import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutTransactionInput } from './wallet-create-without-transaction.input';

@InputType()
export class WalletCreateOrConnectWithoutTransactionInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutTransactionInput, {nullable:false})
    create!: WalletCreateWithoutTransactionInput;
}
