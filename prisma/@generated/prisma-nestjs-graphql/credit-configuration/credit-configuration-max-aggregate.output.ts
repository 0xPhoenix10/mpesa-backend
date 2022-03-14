import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SlicesEnum } from '../prisma/slices.enum';
import { CreditConfigurationStatus } from '../prisma/credit-configuration-status.enum';

@ObjectType()
export class CreditConfigurationMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Boolean, {nullable:true})
    shouldPayDeposit?: boolean;

    @Field(() => Float, {nullable:true})
    depositPercentage?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => SlicesEnum, {nullable:true})
    slices?: keyof typeof SlicesEnum;

    @Field(() => Float, {nullable:true})
    seviFeesPercentage?: number;

    @Field(() => Int, {nullable:true})
    daysToStartAfterDelivery?: number;

    @Field(() => Float, {nullable:true})
    lateInstallmentFeesPercentage?: number;

    @Field(() => Float, {nullable:true})
    affiliatePercentage?: number;

    @Field(() => Float, {nullable:true})
    creditLateFeesPercentage?: number;

    @Field(() => Float, {nullable:true})
    creditLateDays?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CreditConfigurationStatus, {nullable:true})
    status?: keyof typeof CreditConfigurationStatus;

    @Field(() => Int, {nullable:true})
    numberOfAllowedCredits?: number;

    @Field(() => Float, {nullable:true})
    fundFeesPercentage?: number;

    @Field(() => String, {nullable:true})
    fundId?: string;
}
