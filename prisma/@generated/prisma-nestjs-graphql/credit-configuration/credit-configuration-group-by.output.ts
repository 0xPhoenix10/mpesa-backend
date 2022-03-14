import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SlicesEnum } from '../prisma/slices.enum';
import { CreditConfigurationStatus } from '../prisma/credit-configuration-status.enum';
import { CreditConfigurationCountAggregate } from './credit-configuration-count-aggregate.output';
import { CreditConfigurationAvgAggregate } from './credit-configuration-avg-aggregate.output';
import { CreditConfigurationSumAggregate } from './credit-configuration-sum-aggregate.output';
import { CreditConfigurationMinAggregate } from './credit-configuration-min-aggregate.output';
import { CreditConfigurationMaxAggregate } from './credit-configuration-max-aggregate.output';

@ObjectType()
export class CreditConfigurationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    shouldPayDeposit?: boolean;

    @Field(() => Float, {nullable:false})
    depositPercentage!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => SlicesEnum, {nullable:false})
    slices!: keyof typeof SlicesEnum;

    @Field(() => Float, {nullable:false})
    seviFeesPercentage!: number;

    @Field(() => Int, {nullable:false})
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
    createdAt?: Date | string;

    @Field(() => CreditConfigurationStatus, {nullable:false})
    status!: keyof typeof CreditConfigurationStatus;

    @Field(() => Int, {nullable:false})
    numberOfAllowedCredits!: number;

    @Field(() => Float, {nullable:true})
    fundFeesPercentage?: number;

    @Field(() => String, {nullable:false})
    fundId!: string;

    @Field(() => CreditConfigurationCountAggregate, {nullable:true})
    _count?: CreditConfigurationCountAggregate;

    @Field(() => CreditConfigurationAvgAggregate, {nullable:true})
    _avg?: CreditConfigurationAvgAggregate;

    @Field(() => CreditConfigurationSumAggregate, {nullable:true})
    _sum?: CreditConfigurationSumAggregate;

    @Field(() => CreditConfigurationMinAggregate, {nullable:true})
    _min?: CreditConfigurationMinAggregate;

    @Field(() => CreditConfigurationMaxAggregate, {nullable:true})
    _max?: CreditConfigurationMaxAggregate;
}
