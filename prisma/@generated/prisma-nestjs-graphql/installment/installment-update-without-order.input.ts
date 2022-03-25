import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableEnuminstallmentStatusTypeEnumFieldUpdateOperationsInput } from '../prisma/nullable-enuminstallment-status-type-enum-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumCurrencyEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-currency-enum-field-update-operations.input';
import { CreditConfigurationUpdateOneRequiredWithoutInstallmentInput } from '../credit-configuration/credit-configuration-update-one-required-without-installment.input';
import { CreditUpdateOneWithoutInstallmentsInput } from '../credit/credit-update-one-without-installments.input';
import { WalletUpdateOneWithoutCreditorInstallmentsInput } from '../wallet/wallet-update-one-without-creditor-installments.input';
import { WalletUpdateOneWithoutDebtorInstallmentsInput } from '../wallet/wallet-update-one-without-debtor-installments.input';
import { UserUpdateOneWithoutInstallmentInput } from '../user/user-update-one-without-installment.input';

@InputType()
export class InstallmentUpdateWithoutOrderInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    installmentCount?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referenceNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    paidAmount?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableEnuminstallmentStatusTypeEnumFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnuminstallmentStatusTypeEnumFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    firstTryFailedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amountWithPenalty?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    seviFees?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    penalty?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    paidAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    affiliateFees?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableEnumCurrencyEnumFieldUpdateOperationsInput, {nullable:true})
    currency?: NullableEnumCurrencyEnumFieldUpdateOperationsInput;

    @Field(() => CreditConfigurationUpdateOneRequiredWithoutInstallmentInput, {nullable:true})
    creditConfiguration?: CreditConfigurationUpdateOneRequiredWithoutInstallmentInput;

    @Field(() => CreditUpdateOneWithoutInstallmentsInput, {nullable:true})
    credit?: CreditUpdateOneWithoutInstallmentsInput;

    @Field(() => WalletUpdateOneWithoutCreditorInstallmentsInput, {nullable:true})
    creditor?: WalletUpdateOneWithoutCreditorInstallmentsInput;

    @Field(() => WalletUpdateOneWithoutDebtorInstallmentsInput, {nullable:true})
    debtor?: WalletUpdateOneWithoutDebtorInstallmentsInput;

    @Field(() => UserUpdateOneWithoutInstallmentInput, {nullable:true})
    user?: UserUpdateOneWithoutInstallmentInput;
}
