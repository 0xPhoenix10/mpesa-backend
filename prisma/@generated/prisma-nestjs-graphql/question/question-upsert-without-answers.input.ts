import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionUpdateWithoutAnswersInput } from './question-update-without-answers.input';
import { QuestionCreateWithoutAnswersInput } from './question-create-without-answers.input';

@InputType()
export class QuestionUpsertWithoutAnswersInput {

    @Field(() => QuestionUpdateWithoutAnswersInput, {nullable:false})
    update!: QuestionUpdateWithoutAnswersInput;

    @Field(() => QuestionCreateWithoutAnswersInput, {nullable:false})
    create!: QuestionCreateWithoutAnswersInput;
}
