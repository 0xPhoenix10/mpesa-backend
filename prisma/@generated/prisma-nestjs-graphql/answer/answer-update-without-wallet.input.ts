import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneWithoutAnswersInput } from '../user/user-update-one-without-answers.input';
import { QuestionUpdateOneRequiredWithoutAnswersInput } from '../question/question-update-one-required-without-answers.input';

@InputType()
export class AnswerUpdateWithoutWalletInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    answer?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    answeredByReference?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutAnswersInput, {nullable:true})
    answered?: UserUpdateOneWithoutAnswersInput;

    @Field(() => QuestionUpdateOneRequiredWithoutAnswersInput, {nullable:true})
    question?: QuestionUpdateOneRequiredWithoutAnswersInput;
}
