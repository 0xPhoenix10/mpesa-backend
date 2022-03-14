import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsCreateWithoutWalletInput } from './settings-create-without-wallet.input';
import { SettingsCreateOrConnectWithoutWalletInput } from './settings-create-or-connect-without-wallet.input';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';

@InputType()
export class SettingsCreateNestedOneWithoutWalletInput {

    @Field(() => SettingsCreateWithoutWalletInput, {nullable:true})
    create?: SettingsCreateWithoutWalletInput;

    @Field(() => SettingsCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: SettingsCreateOrConnectWithoutWalletInput;

    @Field(() => SettingsWhereUniqueInput, {nullable:true})
    connect?: SettingsWhereUniqueInput;
}
