import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutSettingsInput } from './wallet-create-without-settings.input';
import { WalletCreateOrConnectWithoutSettingsInput } from './wallet-create-or-connect-without-settings.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutSettingsInput {

    @Field(() => WalletCreateWithoutSettingsInput, {nullable:true})
    create?: WalletCreateWithoutSettingsInput;

    @Field(() => WalletCreateOrConnectWithoutSettingsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutSettingsInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
