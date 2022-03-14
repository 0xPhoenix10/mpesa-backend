import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCategoryEnum } from '../question/question-category.enum';

@InputType()
export class EnumQuestionCategoryEnumFieldUpdateOperationsInput {

    @Field(() => QuestionCategoryEnum, {nullable:true})
    set?: keyof typeof QuestionCategoryEnum;
}
