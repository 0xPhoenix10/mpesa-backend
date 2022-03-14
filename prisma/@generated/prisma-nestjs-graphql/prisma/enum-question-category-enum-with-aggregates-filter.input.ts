import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCategoryEnum } from '../question/question-category.enum';
import { NestedEnumQuestionCategoryEnumWithAggregatesFilter } from './nested-enum-question-category-enum-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumQuestionCategoryEnumFilter } from './nested-enum-question-category-enum-filter.input';

@InputType()
export class EnumQuestionCategoryEnumWithAggregatesFilter {

    @Field(() => QuestionCategoryEnum, {nullable:true})
    equals?: keyof typeof QuestionCategoryEnum;

    @Field(() => [QuestionCategoryEnum], {nullable:true})
    in?: Array<keyof typeof QuestionCategoryEnum>;

    @Field(() => [QuestionCategoryEnum], {nullable:true})
    notIn?: Array<keyof typeof QuestionCategoryEnum>;

    @Field(() => NestedEnumQuestionCategoryEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumQuestionCategoryEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumQuestionCategoryEnumFilter, {nullable:true})
    _min?: NestedEnumQuestionCategoryEnumFilter;

    @Field(() => NestedEnumQuestionCategoryEnumFilter, {nullable:true})
    _max?: NestedEnumQuestionCategoryEnumFilter;
}
