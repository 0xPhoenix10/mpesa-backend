import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';
import { ShippingOrderByWithRelationInput } from './shipping-order-by-with-relation.input';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingCountAggregateInput } from './shipping-count-aggregate.input';
import { ShippingAvgAggregateInput } from './shipping-avg-aggregate.input';
import { ShippingSumAggregateInput } from './shipping-sum-aggregate.input';
import { ShippingMinAggregateInput } from './shipping-min-aggregate.input';
import { ShippingMaxAggregateInput } from './shipping-max-aggregate.input';

@ArgsType()
export class ShippingAggregateArgs {

    @Field(() => ShippingWhereInput, {nullable:true})
    where?: ShippingWhereInput;

    @Field(() => [ShippingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShippingOrderByWithRelationInput>;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    cursor?: ShippingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShippingCountAggregateInput, {nullable:true})
    _count?: ShippingCountAggregateInput;

    @Field(() => ShippingAvgAggregateInput, {nullable:true})
    _avg?: ShippingAvgAggregateInput;

    @Field(() => ShippingSumAggregateInput, {nullable:true})
    _sum?: ShippingSumAggregateInput;

    @Field(() => ShippingMinAggregateInput, {nullable:true})
    _min?: ShippingMinAggregateInput;

    @Field(() => ShippingMaxAggregateInput, {nullable:true})
    _max?: ShippingMaxAggregateInput;
}
