import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutWalletInput } from './transaction-create-without-wallet.input';
import { TransactionCreateOrConnectWithoutWalletInput } from './transaction-create-or-connect-without-wallet.input';
import { TransactionUpsertWithWhereUniqueWithoutWalletInput } from './transaction-upsert-with-where-unique-without-wallet.input';
import { TransactionCreateManyWalletInputEnvelope } from './transaction-create-many-wallet-input-envelope.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutWalletInput } from './transaction-update-with-where-unique-without-wallet.input';
import { TransactionUpdateManyWithWhereWithoutWalletInput } from './transaction-update-many-with-where-without-wallet.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUncheckedUpdateManyWithoutWalletInput {

    @Field(() => [TransactionCreateWithoutWalletInput], {nullable:true})
    create?: Array<TransactionCreateWithoutWalletInput>;

    @Field(() => [TransactionCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutWalletInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => TransactionCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: TransactionCreateManyWalletInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    set?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    disconnect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    delete?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    connect?: Array<TransactionWhereUniqueInput>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<TransactionUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    deleteMany?: Array<TransactionScalarWhereInput>;
}
