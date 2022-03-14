import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutCreditConfigurationsInput } from './wallet-update-without-credit-configurations.input';
import { WalletCreateWithoutCreditConfigurationsInput } from './wallet-create-without-credit-configurations.input';

@InputType()
export class WalletUpsertWithoutCreditConfigurationsInput {

    @Field(() => WalletUpdateWithoutCreditConfigurationsInput, {nullable:false})
    update!: WalletUpdateWithoutCreditConfigurationsInput;

    @Field(() => WalletCreateWithoutCreditConfigurationsInput, {nullable:false})
    create!: WalletCreateWithoutCreditConfigurationsInput;
}
