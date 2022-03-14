import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShippingCountAggregate } from './shipping-count-aggregate.output';
import { ShippingAvgAggregate } from './shipping-avg-aggregate.output';
import { ShippingSumAggregate } from './shipping-sum-aggregate.output';
import { ShippingMinAggregate } from './shipping-min-aggregate.output';
import { ShippingMaxAggregate } from './shipping-max-aggregate.output';

@ObjectType()
export class AggregateShipping {

    @Field(() => ShippingCountAggregate, {nullable:true})
    _count?: ShippingCountAggregate;

    @Field(() => ShippingAvgAggregate, {nullable:true})
    _avg?: ShippingAvgAggregate;

    @Field(() => ShippingSumAggregate, {nullable:true})
    _sum?: ShippingSumAggregate;

    @Field(() => ShippingMinAggregate, {nullable:true})
    _min?: ShippingMinAggregate;

    @Field(() => ShippingMaxAggregate, {nullable:true})
    _max?: ShippingMaxAggregate;
}
