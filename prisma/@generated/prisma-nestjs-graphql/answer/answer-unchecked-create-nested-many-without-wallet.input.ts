import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateWithoutWalletInput } from './answer-create-without-wallet.input';
import { AnswerCreateOrConnectWithoutWalletInput } from './answer-create-or-connect-without-wallet.input';
import { AnswerCreateManyWalletInputEnvelope } from './answer-create-many-wallet-input-envelope.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';

@InputType()
export class AnswerUncheckedCreateNestedManyWithoutWalletInput {

    @Field(() => [AnswerCreateWithoutWalletInput], {nullable:true})
    create?: Array<AnswerCreateWithoutWalletInput>;

    @Field(() => [AnswerCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<AnswerCreateOrConnectWithoutWalletInput>;

    @Field(() => AnswerCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: AnswerCreateManyWalletInputEnvelope;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AnswerWhereUniqueInput>;
}
