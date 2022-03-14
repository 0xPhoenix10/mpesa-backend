import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumSlicesEnumFieldUpdateOperationsInput } from '../prisma/enum-slices-enum-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumCreditConfigurationStatusFieldUpdateOperationsInput } from '../prisma/enum-credit-configuration-status-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { WalletUpdateOneRequiredWithoutCreditConfigurationsInput } from '../wallet/wallet-update-one-required-without-credit-configurations.input';
import { CreditUpdateManyWithoutCreditConfigurationInput } from '../credit/credit-update-many-without-credit-configuration.input';
import { CreditConfigurationsWalletsUpdateManyWithoutConfigurationInput } from '../credit-configurations-wallets/credit-configurations-wallets-update-many-without-configuration.input';
import { InstallmentUpdateManyWithoutCreditConfigurationInput } from '../installment/installment-update-many-without-credit-configuration.input';

@InputType()
export class CreditConfigurationUpdateWithoutCreditRequestsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    shouldPayDeposit?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    depositPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    duration?: IntFieldUpdateOperationsInput;

    @Field(() => EnumSlicesEnumFieldUpdateOperationsInput, {nullable:true})
    slices?: EnumSlicesEnumFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    seviFeesPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    daysToStartAfterDelivery?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    lateInstallmentFeesPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    affiliatePercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    creditLateFeesPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    creditLateDays?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => EnumCreditConfigurationStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumCreditConfigurationStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    numberOfAllowedCredits?: IntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    fundFeesPercentage?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneRequiredWithoutCreditConfigurationsInput, {nullable:true})
    wallet?: WalletUpdateOneRequiredWithoutCreditConfigurationsInput;

    @Field(() => CreditUpdateManyWithoutCreditConfigurationInput, {nullable:true})
    credit?: CreditUpdateManyWithoutCreditConfigurationInput;

    @Field(() => CreditConfigurationsWalletsUpdateManyWithoutConfigurationInput, {nullable:true})
    attachedWallets?: CreditConfigurationsWalletsUpdateManyWithoutConfigurationInput;

    @Field(() => InstallmentUpdateManyWithoutCreditConfigurationInput, {nullable:true})
    Installment?: InstallmentUpdateManyWithoutCreditConfigurationInput;
}
