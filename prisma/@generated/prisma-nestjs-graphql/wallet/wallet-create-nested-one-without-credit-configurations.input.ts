import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutCreditConfigurationsInput } from './wallet-create-without-credit-configurations.input';
import { WalletCreateOrConnectWithoutCreditConfigurationsInput } from './wallet-create-or-connect-without-credit-configurations.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutCreditConfigurationsInput {

    @Field(() => WalletCreateWithoutCreditConfigurationsInput, {nullable:true})
    create?: WalletCreateWithoutCreditConfigurationsInput;

    @Field(() => WalletCreateOrConnectWithoutCreditConfigurationsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutCreditConfigurationsInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
