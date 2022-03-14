import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CreditConfigurationSumAggregate {

    @Field(() => Float, {nullable:true})
    depositPercentage?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

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

    @Field(() => Int, {nullable:true})
    numberOfAllowedCredits?: number;

    @Field(() => Float, {nullable:true})
    fundFeesPercentage?: number;
}
