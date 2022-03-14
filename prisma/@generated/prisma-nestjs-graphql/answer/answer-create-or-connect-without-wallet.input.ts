import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerCreateWithoutWalletInput } from './answer-create-without-wallet.input';

@InputType()
export class AnswerCreateOrConnectWithoutWalletInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerCreateWithoutWalletInput, {nullable:false})
    create!: AnswerCreateWithoutWalletInput;
}
