import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithoutWalletInput } from './answer-update-without-wallet.input';
import { AnswerCreateWithoutWalletInput } from './answer-create-without-wallet.input';

@InputType()
export class AnswerUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerUpdateWithoutWalletInput, {nullable:false})
    update!: AnswerUpdateWithoutWalletInput;

    @Field(() => AnswerCreateWithoutWalletInput, {nullable:false})
    create!: AnswerCreateWithoutWalletInput;
}
