import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutWalletInput } from './transaction-create-without-wallet.input';
import { TransactionCreateOrConnectWithoutWalletInput } from './transaction-create-or-connect-without-wallet.input';
import { TransactionCreateManyWalletInputEnvelope } from './transaction-create-many-wallet-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutWalletInput {

    @Field(() => [TransactionCreateWithoutWalletInput], {nullable:true})
    create?: Array<TransactionCreateWithoutWalletInput>;

    @Field(() => [TransactionCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutWalletInput>;

    @Field(() => TransactionCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyWalletInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;
}
