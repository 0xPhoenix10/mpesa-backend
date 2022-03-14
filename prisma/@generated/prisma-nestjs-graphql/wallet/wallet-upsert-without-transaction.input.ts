import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutTransactionInput } from './wallet-update-without-transaction.input';
import { WalletCreateWithoutTransactionInput } from './wallet-create-without-transaction.input';

@InputType()
export class WalletUpsertWithoutTransactionInput {

    @Field(() => WalletUpdateWithoutTransactionInput, {nullable:false})
    update!: WalletUpdateWithoutTransactionInput;

    @Field(() => WalletCreateWithoutTransactionInput, {nullable:false})
    create!: WalletCreateWithoutTransactionInput;
}
