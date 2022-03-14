import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { WalletUpdateOneRequiredWithoutAnswersInput } from '../wallet/wallet-update-one-required-without-answers.input';
import { UserUpdateOneWithoutAnswersInput } from '../user/user-update-one-without-answers.input';

@InputType()
export class AnswerUpdateWithoutQuestionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    answer?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    answeredByReference?: NullableStringFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneRequiredWithoutAnswersInput, {nullable:true})
    wallet?: WalletUpdateOneRequiredWithoutAnswersInput;

    @Field(() => UserUpdateOneWithoutAnswersInput, {nullable:true})
    answered?: UserUpdateOneWithoutAnswersInput;
}
