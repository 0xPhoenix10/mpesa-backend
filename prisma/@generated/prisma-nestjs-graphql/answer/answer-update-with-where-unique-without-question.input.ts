import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithoutQuestionInput } from './answer-update-without-question.input';

@InputType()
export class AnswerUpdateWithWhereUniqueWithoutQuestionInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerUpdateWithoutQuestionInput, {nullable:false})
    data!: AnswerUpdateWithoutQuestionInput;
}
