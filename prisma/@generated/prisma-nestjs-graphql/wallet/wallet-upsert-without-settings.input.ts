import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutSettingsInput } from './wallet-update-without-settings.input';
import { WalletCreateWithoutSettingsInput } from './wallet-create-without-settings.input';

@InputType()
export class WalletUpsertWithoutSettingsInput {

    @Field(() => WalletUpdateWithoutSettingsInput, {nullable:false})
    update!: WalletUpdateWithoutSettingsInput;

    @Field(() => WalletCreateWithoutSettingsInput, {nullable:false})
    create!: WalletCreateWithoutSettingsInput;
}
