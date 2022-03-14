import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithoutWalletInput } from './transaction-update-without-wallet.input';

@InputType()
export class TransactionUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionUpdateWithoutWalletInput, {nullable:false})
    data!: TransactionUpdateWithoutWalletInput;
}
