import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { answerTypeEnum } from '../prisma/answer-type.enum';
import { QuestionCategoryEnum } from './question-category.enum';
import { Answer } from '../answer/answer.model';
import { QuestionCount } from './question-count.output';

@ObjectType()
export class Question {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => answerTypeEnum, {nullable:false})
    answersType!: keyof typeof answerTypeEnum;

    @Field(() => QuestionCategoryEnum, {nullable:false})
    category!: keyof typeof QuestionCategoryEnum;

    @Field(() => String, {nullable:false})
    question!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isActive!: boolean;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [Answer], {nullable:true})
    answers?: Array<Answer>;

    @Field(() => QuestionCount, {nullable:false})
    _count?: QuestionCount;
}
