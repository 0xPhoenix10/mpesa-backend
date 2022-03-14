import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CreditConfigurationsWalletsCountAggregate {

    @Field(() => Int, {nullable:false})
    configurationId!: number;

    @Field(() => Int, {nullable:false})
    walletId!: number;

    @Field(() => Int, {nullable:false})
    upfrontPercentage!: number;

    @Field(() => Int, {nullable:false})
    fundFeesPercentage!: number;

    @Field(() => Int, {nullable:false})
    maxOrderAmount!: number;

    @Field(() => Int, {nullable:false})
    maxOutstandingCredit!: number;

    @Field(() => Int, {nullable:false})
    shareFeesPercentage!: number;

    @Field(() => Int, {nullable:false})
    postDeliveryPercentage!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
