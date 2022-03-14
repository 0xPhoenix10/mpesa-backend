import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutSettingsInput } from './wallet-create-without-settings.input';
import { WalletCreateOrConnectWithoutSettingsInput } from './wallet-create-or-connect-without-settings.input';
import { WalletUpsertWithoutSettingsInput } from './wallet-upsert-without-settings.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutSettingsInput } from './wallet-update-without-settings.input';

@InputType()
export class WalletUpdateOneRequiredWithoutSettingsInput {

    @Field(() => WalletCreateWithoutSettingsInput, {nullable:true})
    create?: WalletCreateWithoutSettingsInput;

    @Field(() => WalletCreateOrConnectWithoutSettingsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutSettingsInput;

    @Field(() => WalletUpsertWithoutSettingsInput, {nullable:true})
    upsert?: WalletUpsertWithoutSettingsInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutSettingsInput, {nullable:true})
    update?: WalletUpdateWithoutSettingsInput;
}
