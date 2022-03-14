import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MessageUpdateinstallmentSlicesInput } from '../prisma/message-updateinstallment-slices.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumlanguageFieldUpdateOperationsInput } from '../prisma/enumlanguage-field-update-operations.input';

@InputType()
export class MessageUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    messageId?: StringFieldUpdateOperationsInput;

    @Field(() => MessageUpdateinstallmentSlicesInput, {nullable:true})
    installmentSlices?: MessageUpdateinstallmentSlicesInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    SMS?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    pushNotificationTitle?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    pushNotificationBody?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumlanguageFieldUpdateOperationsInput, {nullable:true})
    language?: EnumlanguageFieldUpdateOperationsInput;
}
