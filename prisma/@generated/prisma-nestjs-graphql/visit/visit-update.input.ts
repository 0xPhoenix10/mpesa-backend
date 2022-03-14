import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { WalletUpdateOneRequiredWithoutVisitInput } from '../wallet/wallet-update-one-required-without-visit.input';
import { UserUpdateOneWithoutVisitInput } from '../user/user-update-one-without-visit.input';

@InputType()
export class VisitUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    visitedByReference?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    whenVisitTookPlace?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneRequiredWithoutVisitInput, {nullable:true})
    wallet?: WalletUpdateOneRequiredWithoutVisitInput;

    @Field(() => UserUpdateOneWithoutVisitInput, {nullable:true})
    visited?: UserUpdateOneWithoutVisitInput;
}
