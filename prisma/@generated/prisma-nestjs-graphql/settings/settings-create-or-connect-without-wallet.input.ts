import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { SettingsCreateWithoutWalletInput } from './settings-create-without-wallet.input';

@InputType()
export class SettingsCreateOrConnectWithoutWalletInput {

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    where!: SettingsWhereUniqueInput;

    @Field(() => SettingsCreateWithoutWalletInput, {nullable:false})
    create!: SettingsCreateWithoutWalletInput;
}
