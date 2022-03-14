import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionCreateWithoutWalletInput } from './transaction-create-without-wallet.input';

@InputType()
export class TransactionCreateOrConnectWithoutWalletInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateWithoutWalletInput, {nullable:false})
    create!: TransactionCreateWithoutWalletInput;
}
