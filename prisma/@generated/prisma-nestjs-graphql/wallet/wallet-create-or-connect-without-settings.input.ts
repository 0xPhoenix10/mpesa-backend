import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutSettingsInput } from './wallet-create-without-settings.input';

@InputType()
export class WalletCreateOrConnectWithoutSettingsInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutSettingsInput, {nullable:false})
    create!: WalletCreateWithoutSettingsInput;
}
