import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { answerTypeEnum } from '../prisma/answer-type.enum';
import { QuestionCategoryEnum } from './question-category.enum';
import { QuestionCountAggregate } from './question-count-aggregate.output';
import { QuestionMinAggregate } from './question-min-aggregate.output';
import { QuestionMaxAggregate } from './question-max-aggregate.output';

@ObjectType()
export class QuestionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => answerTypeEnum, {nullable:false})
    answersType!: keyof typeof answerTypeEnum;

    @Field(() => QuestionCategoryEnum, {nullable:false})
    category!: keyof typeof QuestionCategoryEnum;

    @Field(() => String, {nullable:false})
    question!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => QuestionCountAggregate, {nullable:true})
    _count?: QuestionCountAggregate;

    @Field(() => QuestionMinAggregate, {nullable:true})
    _min?: QuestionMinAggregate;

    @Field(() => QuestionMaxAggregate, {nullable:true})
    _max?: QuestionMaxAggregate;
}
