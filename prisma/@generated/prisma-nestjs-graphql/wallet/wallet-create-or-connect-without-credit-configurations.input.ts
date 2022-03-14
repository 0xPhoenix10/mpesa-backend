import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutCreditConfigurationsInput } from './wallet-create-without-credit-configurations.input';

@InputType()
export class WalletCreateOrConnectWithoutCreditConfigurationsInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutCreditConfigurationsInput, {nullable:false})
    create!: WalletCreateWithoutCreditConfigurationsInput;
}
