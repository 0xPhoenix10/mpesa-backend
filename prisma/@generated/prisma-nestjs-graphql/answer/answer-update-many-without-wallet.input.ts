import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateWithoutWalletInput } from './answer-create-without-wallet.input';
import { AnswerCreateOrConnectWithoutWalletInput } from './answer-create-or-connect-without-wallet.input';
import { AnswerUpsertWithWhereUniqueWithoutWalletInput } from './answer-upsert-with-where-unique-without-wallet.input';
import { AnswerCreateManyWalletInputEnvelope } from './answer-create-many-wallet-input-envelope.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithWhereUniqueWithoutWalletInput } from './answer-update-with-where-unique-without-wallet.input';
import { AnswerUpdateManyWithWhereWithoutWalletInput } from './answer-update-many-with-where-without-wallet.input';
import { AnswerScalarWhereInput } from './answer-scalar-where.input';

@InputType()
export class AnswerUpdateManyWithoutWalletInput {

    @Field(() => [AnswerCreateWithoutWalletInput], {nullable:true})
    create?: Array<AnswerCreateWithoutWalletInput>;

    @Field(() => [AnswerCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<AnswerCreateOrConnectWithoutWalletInput>;

    @Field(() => [AnswerUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<AnswerUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => AnswerCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: AnswerCreateManyWalletInputEnvelope;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    set?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    delete?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<AnswerUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [AnswerUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<AnswerUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<AnswerScalarWhereInput>;
}
