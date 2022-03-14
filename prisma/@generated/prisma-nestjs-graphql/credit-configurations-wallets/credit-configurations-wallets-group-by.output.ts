import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CreditConfigurationsWalletsCountAggregate } from './credit-configurations-wallets-count-aggregate.output';
import { CreditConfigurationsWalletsAvgAggregate } from './credit-configurations-wallets-avg-aggregate.output';
import { CreditConfigurationsWalletsSumAggregate } from './credit-configurations-wallets-sum-aggregate.output';
import { CreditConfigurationsWalletsMinAggregate } from './credit-configurations-wallets-min-aggregate.output';
import { CreditConfigurationsWalletsMaxAggregate } from './credit-configurations-wallets-max-aggregate.output';

@ObjectType()
export class CreditConfigurationsWalletsGroupBy {

    @Field(() => String, {nullable:false})
    configurationId!: string;

    @Field(() => String, {nullable:false})
    walletId!: string;

    @Field(() => Float, {nullable:false})
    upfrontPercentage!: number;

    @Field(() => Float, {nullable:false})
    fundFeesPercentage!: number;

    @Field(() => Float, {nullable:false})
    maxOrderAmount!: number;

    @Field(() => Float, {nullable:false})
    maxOutstandingCredit!: number;

    @Field(() => Float, {nullable:false})
    shareFeesPercentage!: number;

    @Field(() => Float, {nullable:false})
    postDeliveryPercentage!: number;

    @Field(() => CreditConfigurationsWalletsCountAggregate, {nullable:true})
    _count?: CreditConfigurationsWalletsCountAggregate;

    @Field(() => CreditConfigurationsWalletsAvgAggregate, {nullable:true})
    _avg?: CreditConfigurationsWalletsAvgAggregate;

    @Field(() => CreditConfigurationsWalletsSumAggregate, {nullable:true})
    _sum?: CreditConfigurationsWalletsSumAggregate;

    @Field(() => CreditConfigurationsWalletsMinAggregate, {nullable:true})
    _min?: CreditConfigurationsWalletsMinAggregate;

    @Field(() => CreditConfigurationsWalletsMaxAggregate, {nullable:true})
    _max?: CreditConfigurationsWalletsMaxAggregate;
}
