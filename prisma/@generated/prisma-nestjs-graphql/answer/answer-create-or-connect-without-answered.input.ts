import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerCreateWithoutAnsweredInput } from './answer-create-without-answered.input';

@InputType()
export class AnswerCreateOrConnectWithoutAnsweredInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerCreateWithoutAnsweredInput, {nullable:false})
    create!: AnswerCreateWithoutAnsweredInput;
}
