import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCategoryEnum } from '../question/question-category.enum';

@InputType()
export class NestedEnumQuestionCategoryEnumFilter {

    @Field(() => QuestionCategoryEnum, {nullable:true})
    equals?: keyof typeof QuestionCategoryEnum;

    @Field(() => [QuestionCategoryEnum], {nullable:true})
    in?: Array<keyof typeof QuestionCategoryEnum>;

    @Field(() => [QuestionCategoryEnum], {nullable:true})
    notIn?: Array<keyof typeof QuestionCategoryEnum>;

    @Field(() => NestedEnumQuestionCategoryEnumFilter, {nullable:true})
    not?: NestedEnumQuestionCategoryEnumFilter;
}
