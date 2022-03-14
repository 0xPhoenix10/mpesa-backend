import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumPaymentTypesEnumFieldUpdateOperationsInput } from '../prisma/enum-payment-types-enum-field-update-operations.input';
import { EnumCurrencyEnumFieldUpdateOperationsInput } from '../prisma/enum-currency-enum-field-update-operations.input';
import { NullableEnumTransactionTypeEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-transaction-type-enum-field-update-operations.input';
import { NullableEnumTransactionMethodEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-transaction-method-enum-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { WalletUpdateOneWithoutTransactionInput } from '../wallet/wallet-update-one-without-transaction.input';

@InputType()
export class TransactionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    fee?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalAmount?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumPaymentTypesEnumFieldUpdateOperationsInput, {nullable:true})
    paymentType?: EnumPaymentTypesEnumFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    paymentTypeId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumCurrencyEnumFieldUpdateOperationsInput, {nullable:true})
    currency?: EnumCurrencyEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumTransactionTypeEnumFieldUpdateOperationsInput, {nullable:true})
    transactionType?: NullableEnumTransactionTypeEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumTransactionMethodEnumFieldUpdateOperationsInput, {nullable:true})
    method?: NullableEnumTransactionMethodEnumFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    balanceAfter?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    balanceBefore?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneWithoutTransactionInput, {nullable:true})
    wallet?: WalletUpdateOneWithoutTransactionInput;
}
