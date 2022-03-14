import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SlicesEnum } from '../prisma/slices.enum';
import { CreditConfigurationStatus } from '../prisma/credit-configuration-status.enum';
import { WalletCreateNestedOneWithoutCreditConfigurationsInput } from '../wallet/wallet-create-nested-one-without-credit-configurations.input';
import { CreditCreateNestedManyWithoutCreditConfigurationInput } from '../credit/credit-create-nested-many-without-credit-configuration.input';
import { CreditConfigurationsWalletsCreateNestedManyWithoutConfigurationInput } from '../credit-configurations-wallets/credit-configurations-wallets-create-nested-many-without-configuration.input';
import { InstallmentCreateNestedManyWithoutCreditConfigurationInput } from '../installment/installment-create-nested-many-without-credit-configuration.input';

@InputType()
export class CreditConfigurationCreateWithoutCreditRequestsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    shouldPayDeposit?: boolean;

    @Field(() => Float, {nullable:true})
    depositPercentage?: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => SlicesEnum, {nullable:false})
    slices!: keyof typeof SlicesEnum;

    @Field(() => Float, {nullable:false})
    seviFeesPercentage!: number;

    @Field(() => Int, {nullable:true})
    daysToStartAfterDelivery?: number;

    @Field(() => Float, {nullable:false})
    lateInstallmentFeesPercentage!: number;

    @Field(() => Float, {nullable:false})
    affiliatePercentage!: number;

    @Field(() => Float, {nullable:false})
    creditLateFeesPercentage!: number;

    @Field(() => Float, {nullable:false})
    creditLateDays!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CreditConfigurationStatus, {nullable:true})
    status?: keyof typeof CreditConfigurationStatus;

    @Field(() => Int, {nullable:true})
    numberOfAllowedCredits?: number;

    @Field(() => Float, {nullable:true})
    fundFeesPercentage?: number;

    @Field(() => WalletCreateNestedOneWithoutCreditConfigurationsInput, {nullable:false})
    wallet!: WalletCreateNestedOneWithoutCreditConfigurationsInput;

    @Field(() => CreditCreateNestedManyWithoutCreditConfigurationInput, {nullable:true})
    credit?: CreditCreateNestedManyWithoutCreditConfigurationInput;

    @Field(() => CreditConfigurationsWalletsCreateNestedManyWithoutConfigurationInput, {nullable:true})
    attachedWallets?: CreditConfigurationsWalletsCreateNestedManyWithoutConfigurationInput;

    @Field(() => InstallmentCreateNestedManyWithoutCreditConfigurationInput, {nullable:true})
    Installment?: InstallmentCreateNestedManyWithoutCreditConfigurationInput;
}
