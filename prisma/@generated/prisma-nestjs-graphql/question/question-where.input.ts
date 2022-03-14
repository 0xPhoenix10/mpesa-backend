import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumanswerTypeEnumFilter } from '../prisma/enumanswer-type-enum-filter.input';
import { EnumQuestionCategoryEnumFilter } from '../prisma/enum-question-category-enum-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AnswerListRelationFilter } from '../answer/answer-list-relation-filter.input';

@InputType()
export class QuestionWhereInput {

    @Field(() => [QuestionWhereInput], {nullable:true})
    AND?: Array<QuestionWhereInput>;

    @Field(() => [QuestionWhereInput], {nullable:true})
    OR?: Array<QuestionWhereInput>;

    @Field(() => [QuestionWhereInput], {nullable:true})
    NOT?: Array<QuestionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumanswerTypeEnumFilter, {nullable:true})
    answersType?: EnumanswerTypeEnumFilter;

    @Field(() => EnumQuestionCategoryEnumFilter, {nullable:true})
    category?: EnumQuestionCategoryEnumFilter;

    @Field(() => StringFilter, {nullable:true})
    question?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => AnswerListRelationFilter, {nullable:true})
    answers?: AnswerListRelationFilter;
}
