import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutCreditConfigurationsInput } from './wallet-create-without-credit-configurations.input';
import { WalletCreateOrConnectWithoutCreditConfigurationsInput } from './wallet-create-or-connect-without-credit-configurations.input';
import { WalletUpsertWithoutCreditConfigurationsInput } from './wallet-upsert-without-credit-configurations.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutCreditConfigurationsInput } from './wallet-update-without-credit-configurations.input';

@InputType()
export class WalletUpdateOneRequiredWithoutCreditConfigurationsInput {

    @Field(() => WalletCreateWithoutCreditConfigurationsInput, {nullable:true})
    create?: WalletCreateWithoutCreditConfigurationsInput;

    @Field(() => WalletCreateOrConnectWithoutCreditConfigurationsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutCreditConfigurationsInput;

    @Field(() => WalletUpsertWithoutCreditConfigurationsInput, {nullable:true})
    upsert?: WalletUpsertWithoutCreditConfigurationsInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutCreditConfigurationsInput, {nullable:true})
    update?: WalletUpdateWithoutCreditConfigurationsInput;
}
