import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsCreateWithoutWalletInput } from './settings-create-without-wallet.input';
import { SettingsCreateOrConnectWithoutWalletInput } from './settings-create-or-connect-without-wallet.input';
import { SettingsUpsertWithoutWalletInput } from './settings-upsert-without-wallet.input';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { SettingsUpdateWithoutWalletInput } from './settings-update-without-wallet.input';

@InputType()
export class SettingsUncheckedUpdateOneWithoutWalletInput {

    @Field(() => SettingsCreateWithoutWalletInput, {nullable:true})
    create?: SettingsCreateWithoutWalletInput;

    @Field(() => SettingsCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: SettingsCreateOrConnectWithoutWalletInput;

    @Field(() => SettingsUpsertWithoutWalletInput, {nullable:true})
    upsert?: SettingsUpsertWithoutWalletInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SettingsWhereUniqueInput, {nullable:true})
    connect?: SettingsWhereUniqueInput;

    @Field(() => SettingsUpdateWithoutWalletInput, {nullable:true})
    update?: SettingsUpdateWithoutWalletInput;
}
