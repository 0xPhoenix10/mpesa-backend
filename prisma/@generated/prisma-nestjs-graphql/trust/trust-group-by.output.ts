import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TrustCountAggregate } from './trust-count-aggregate.output';
import { TrustAvgAggregate } from './trust-avg-aggregate.output';
import { TrustSumAggregate } from './trust-sum-aggregate.output';
import { TrustMinAggregate } from './trust-min-aggregate.output';
import { TrustMaxAggregate } from './trust-max-aggregate.output';

@ObjectType()
export class TrustGroupBy {

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Float, {nullable:true})
    trustRating?: number;

    @Field(() => Float, {nullable:true})
    score?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => TrustCountAggregate, {nullable:true})
    _count?: TrustCountAggregate;

    @Field(() => TrustAvgAggregate, {nullable:true})
    _avg?: TrustAvgAggregate;

    @Field(() => TrustSumAggregate, {nullable:true})
    _sum?: TrustSumAggregate;

    @Field(() => TrustMinAggregate, {nullable:true})
    _min?: TrustMinAggregate;

    @Field(() => TrustMaxAggregate, {nullable:true})
    _max?: TrustMaxAggregate;
}
