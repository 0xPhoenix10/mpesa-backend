import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithoutWalletInput } from './answer-update-without-wallet.input';

@InputType()
export class AnswerUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerUpdateWithoutWalletInput, {nullable:false})
    data!: AnswerUpdateWithoutWalletInput;
}
