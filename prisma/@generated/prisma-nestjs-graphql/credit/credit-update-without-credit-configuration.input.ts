import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumCurrencyEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-currency-enum-field-update-operations.input';
import { NullableEnumcreditRefTypeFieldUpdateOperationsInput } from '../prisma/nullable-enumcredit-ref-type-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableEnumcreditStatusEnumFieldUpdateOperationsInput } from '../prisma/nullable-enumcredit-status-enum-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumSlicesEnumFieldUpdateOperationsInput } from '../prisma/enum-slices-enum-field-update-operations.input';
import { UserUpdateOneWithoutCreditsAffilateInput } from '../user/user-update-one-without-credits-affilate.input';
import { WalletUpdateOneWithoutCreditorCreditInput } from '../wallet/wallet-update-one-without-creditor-credit.input';
import { WalletUpdateOneWithoutDebtorCreditInput } from '../wallet/wallet-update-one-without-debtor-credit.input';
import { OrderUpdateOneWithoutCreditInput } from '../order/order-update-one-without-credit.input';
import { UserUpdateOneWithoutCreditsInput } from '../user/user-update-one-without-credits.input';
import { InstallmentUpdateManyWithoutCreditInput } from '../installment/installment-update-many-without-credit.input';

@InputType()
export class CreditUpdateWithoutCreditConfigurationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    typeId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumCurrencyEnumFieldUpdateOperationsInput, {nullable:true})
    currency?: NullableEnumCurrencyEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumcreditRefTypeFieldUpdateOperationsInput, {nullable:true})
    type?: NullableEnumcreditRefTypeFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    amount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    installmentsCount?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    installmentsCountPaid?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableEnumcreditStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumcreditStatusEnumFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    totalPaid?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    totalToPay?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    agreedDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    referenceNumber?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    paidAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    duration?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumSlicesEnumFieldUpdateOperationsInput, {nullable:true})
    durationSlices?: EnumSlicesEnumFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    defaultAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    fundUpfrontAmount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    orderWalletId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    fundFeesAmount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    amountWithFees?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    payNowAmount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    seviFeesAmount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    orderWalletShareFeesAmount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    fundPostDeliveryAmount?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutCreditsAffilateInput, {nullable:true})
    affiliate?: UserUpdateOneWithoutCreditsAffilateInput;

    @Field(() => WalletUpdateOneWithoutCreditorCreditInput, {nullable:true})
    creditor?: WalletUpdateOneWithoutCreditorCreditInput;

    @Field(() => WalletUpdateOneWithoutDebtorCreditInput, {nullable:true})
    debtor?: WalletUpdateOneWithoutDebtorCreditInput;

    @Field(() => OrderUpdateOneWithoutCreditInput, {nullable:true})
    order?: OrderUpdateOneWithoutCreditInput;

    @Field(() => UserUpdateOneWithoutCreditsInput, {nullable:true})
    user?: UserUpdateOneWithoutCreditsInput;

    @Field(() => InstallmentUpdateManyWithoutCreditInput, {nullable:true})
    installments?: InstallmentUpdateManyWithoutCreditInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    payLaterAmount?: NullableFloatFieldUpdateOperationsInput;
}
