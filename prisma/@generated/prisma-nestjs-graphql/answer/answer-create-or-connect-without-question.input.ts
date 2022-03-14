import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerCreateWithoutQuestionInput } from './answer-create-without-question.input';

@InputType()
export class AnswerCreateOrConnectWithoutQuestionInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerCreateWithoutQuestionInput, {nullable:false})
    create!: AnswerCreateWithoutQuestionInput;
}
