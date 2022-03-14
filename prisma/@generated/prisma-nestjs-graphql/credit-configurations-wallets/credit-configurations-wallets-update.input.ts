import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { CreditConfigurationUpdateOneRequiredWithoutAttachedWalletsInput } from '../credit-configuration/credit-configuration-update-one-required-without-attached-wallets.input';

@InputType()
export class CreditConfigurationsWalletsUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    walletId?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    upfrontPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    fundFeesPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    maxOrderAmount?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    maxOutstandingCredit?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    shareFeesPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    postDeliveryPercentage?: FloatFieldUpdateOperationsInput;

    @Field(() => CreditConfigurationUpdateOneRequiredWithoutAttachedWalletsInput, {nullable:true})
    configuration?: CreditConfigurationUpdateOneRequiredWithoutAttachedWalletsInput;
}
