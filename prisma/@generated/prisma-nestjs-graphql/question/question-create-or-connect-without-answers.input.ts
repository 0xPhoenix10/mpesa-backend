import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionCreateWithoutAnswersInput } from './question-create-without-answers.input';

@InputType()
export class QuestionCreateOrConnectWithoutAnswersInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    where!: QuestionWhereUniqueInput;

    @Field(() => QuestionCreateWithoutAnswersInput, {nullable:false})
    create!: QuestionCreateWithoutAnswersInput;
}
