import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumanswerTypeEnumFieldUpdateOperationsInput } from '../prisma/enumanswer-type-enum-field-update-operations.input';
import { EnumQuestionCategoryEnumFieldUpdateOperationsInput } from '../prisma/enum-question-category-enum-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AnswerUpdateManyWithoutQuestionInput } from '../answer/answer-update-many-without-question.input';

@InputType()
export class QuestionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumanswerTypeEnumFieldUpdateOperationsInput, {nullable:true})
    answersType?: EnumanswerTypeEnumFieldUpdateOperationsInput;

    @Field(() => EnumQuestionCategoryEnumFieldUpdateOperationsInput, {nullable:true})
    category?: EnumQuestionCategoryEnumFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    question?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isActive?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AnswerUpdateManyWithoutQuestionInput, {nullable:true})
    answers?: AnswerUpdateManyWithoutQuestionInput;
}
