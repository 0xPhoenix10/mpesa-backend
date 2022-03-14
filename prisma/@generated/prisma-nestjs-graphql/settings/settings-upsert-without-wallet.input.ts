import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsUpdateWithoutWalletInput } from './settings-update-without-wallet.input';
import { SettingsCreateWithoutWalletInput } from './settings-create-without-wallet.input';

@InputType()
export class SettingsUpsertWithoutWalletInput {

    @Field(() => SettingsUpdateWithoutWalletInput, {nullable:false})
    update!: SettingsUpdateWithoutWalletInput;

    @Field(() => SettingsCreateWithoutWalletInput, {nullable:false})
    create!: SettingsCreateWithoutWalletInput;
}
