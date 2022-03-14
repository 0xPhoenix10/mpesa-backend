import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { answerTypeEnum } from '../prisma/answer-type.enum';
import { QuestionCategoryEnum } from './question-category.enum';
import { AnswerUncheckedCreateNestedManyWithoutQuestionInput } from '../answer/answer-unchecked-create-nested-many-without-question.input';

@InputType()
export class QuestionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => answerTypeEnum, {nullable:false})
    answersType!: keyof typeof answerTypeEnum;

    @Field(() => QuestionCategoryEnum, {nullable:false})
    category!: keyof typeof QuestionCategoryEnum;

    @Field(() => String, {nullable:false})
    question!: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => AnswerUncheckedCreateNestedManyWithoutQuestionInput, {nullable:true})
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput;
}
