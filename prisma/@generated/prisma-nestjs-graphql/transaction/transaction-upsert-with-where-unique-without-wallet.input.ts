import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutWalletInput } from './transaction-update-without-wallet.input';
import { TransactionCreateWithoutWalletInput } from './transaction-create-without-wallet.input';

@InputType()
export class TransactionUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutWalletInput, {nullable:false})
    update!: TransactionUpdateWithoutWalletInput;

    @Field(() => TransactionCreateWithoutWalletInput, {nullable:false})
    create!: TransactionCreateWithoutWalletInput;
}
