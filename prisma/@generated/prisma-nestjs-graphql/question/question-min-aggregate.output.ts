import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { answerTypeEnum } from '../prisma/answer-type.enum';
import { QuestionCategoryEnum } from './question-category.enum';

@ObjectType()
export class QuestionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => answerTypeEnum, {nullable:true})
    answersType?: keyof typeof answerTypeEnum;

    @Field(() => QuestionCategoryEnum, {nullable:true})
    category?: keyof typeof QuestionCategoryEnum;

    @Field(() => String, {nullable:true})
    question?: string;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => String, {nullable:true})
    description?: string;
}
