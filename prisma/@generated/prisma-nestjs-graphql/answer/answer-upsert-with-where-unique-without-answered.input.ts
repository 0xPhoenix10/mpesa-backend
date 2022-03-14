import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithoutAnsweredInput } from './answer-update-without-answered.input';
import { AnswerCreateWithoutAnsweredInput } from './answer-create-without-answered.input';

@InputType()
export class AnswerUpsertWithWhereUniqueWithoutAnsweredInput {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerUpdateWithoutAnsweredInput, {nullable:false})
    update!: AnswerUpdateWithoutAnsweredInput;

    @Field(() => AnswerCreateWithoutAnsweredInput, {nullable:false})
    create!: AnswerCreateWithoutAnsweredInput;
}
