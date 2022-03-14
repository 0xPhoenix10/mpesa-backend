import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { WalletUpdateOneRequiredWithoutSettingsInput } from '../wallet/wallet-update-one-required-without-settings.input';

@InputType()
export class SettingsUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    woocommerceUrl?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    woocommerceConsumerKey?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    woocommerceActive?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    woocommerceConsumerSecret?: NullableStringFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneRequiredWithoutSettingsInput, {nullable:true})
    wallet?: WalletUpdateOneRequiredWithoutSettingsInput;
}
