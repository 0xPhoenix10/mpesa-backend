import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CreditConfigurationCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    shouldPayDeposit!: number;

    @Field(() => Int, {nullable:false})
    depositPercentage!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    slices!: number;

    @Field(() => Int, {nullable:false})
    seviFeesPercentage!: number;

    @Field(() => Int, {nullable:false})
    daysToStartAfterDelivery!: number;

    @Field(() => Int, {nullable:false})
    lateInstallmentFeesPercentage!: number;

    @Field(() => Int, {nullable:false})
    affiliatePercentage!: number;

    @Field(() => Int, {nullable:false})
    creditLateFeesPercentage!: number;

    @Field(() => Int, {nullable:false})
    creditLateDays!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    numberOfAllowedCredits!: number;

    @Field(() => Int, {nullable:false})
    fundFeesPercentage!: number;

    @Field(() => Int, {nullable:false})
    fundId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
