import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumanswerTypeEnumWithAggregatesFilter } from '../prisma/enumanswer-type-enum-with-aggregates-filter.input';
import { EnumQuestionCategoryEnumWithAggregatesFilter } from '../prisma/enum-question-category-enum-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class QuestionScalarWhereWithAggregatesInput {

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumanswerTypeEnumWithAggregatesFilter, {nullable:true})
    answersType?: EnumanswerTypeEnumWithAggregatesFilter;

    @Field(() => EnumQuestionCategoryEnumWithAggregatesFilter, {nullable:true})
    category?: EnumQuestionCategoryEnumWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    question?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isActive?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
