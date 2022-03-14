import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithoutAnsweredInput } from './answer-update-without-answered.input';

@InputType()
export class AnswerUpdateWithWhereUniqueWithoutAnsweredInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerUpdateWithoutAnsweredInput, {nullable:false})
    data!: AnswerUpdateWithoutAnsweredInput;
}
