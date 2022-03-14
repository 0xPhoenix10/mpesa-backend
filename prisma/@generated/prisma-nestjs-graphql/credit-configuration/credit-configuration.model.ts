import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SlicesEnum } from '../prisma/slices.enum';
import { CreditConfigurationStatus } from '../prisma/credit-configuration-status.enum';
import { Wallet } from '../wallet/wallet.model';
import { Credit } from '../credit/credit.model';
import { CreditConfigurationsWallets } from '../credit-configurations-wallets/credit-configurations-wallets.model';
import { Installment } from '../installment/installment.model';
import { CreditRequest } from '../credit-request/credit-request.model';
import { CreditConfigurationCount } from './credit-configuration-count.output';

@ObjectType()
export class CreditConfiguration {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    shouldPayDeposit!: boolean | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    depositPercentage!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => SlicesEnum, {nullable:false})
    slices!: keyof typeof SlicesEnum;

    @Field(() => Float, {nullable:false})
    seviFeesPercentage!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    daysToStartAfterDelivery!: number;

    @Field(() => Float, {nullable:false})
    lateInstallmentFeesPercentage!: number;

    @Field(() => Float, {nullable:false})
    affiliatePercentage!: number;

    @Field(() => Float, {nullable:false})
    creditLateFeesPercentage!: number;

    @Field(() => Float, {nullable:false})
    creditLateDays!: number;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => CreditConfigurationStatus, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof CreditConfigurationStatus;

    @Field(() => Int, {nullable:false,defaultValue:0})
    numberOfAllowedCredits!: number;

    @Field(() => Float, {nullable:true,defaultValue:0})
    fundFeesPercentage!: number | null;

    @Field(() => String, {nullable:false})
    fundId!: string;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;

    @Field(() => [Credit], {nullable:true})
    credit?: Array<Credit>;

    @Field(() => [CreditConfigurationsWallets], {nullable:true})
    attachedWallets?: Array<CreditConfigurationsWallets>;

    @Field(() => [Installment], {nullable:true})
    Installment?: Array<Installment>;

    @Field(() => CreditRequest, {nullable:true})
    creditRequests?: CreditRequest | null;

    @Field(() => CreditConfigurationCount, {nullable:false})
    _count?: CreditConfigurationCount;
}
