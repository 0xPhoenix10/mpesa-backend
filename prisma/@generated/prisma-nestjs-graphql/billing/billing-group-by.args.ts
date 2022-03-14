import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingWhereInput } from './billing-where.input';
import { BillingOrderByWithAggregationInput } from './billing-order-by-with-aggregation.input';
import { BillingScalarFieldEnum } from './billing-scalar-field.enum';
import { BillingScalarWhereWithAggregatesInput } from './billing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BillingCountAggregateInput } from './billing-count-aggregate.input';
import { BillingMinAggregateInput } from './billing-min-aggregate.input';
import { BillingMaxAggregateInput } from './billing-max-aggregate.input';

@ArgsType()
export class BillingGroupByArgs {

    @Field(() => BillingWhereInput, {nullable:true})
    where?: BillingWhereInput;

    @Field(() => [BillingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BillingOrderByWithAggregationInput>;

    @Field(() => [BillingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BillingScalarFieldEnum>;

    @Field(() => BillingScalarWhereWithAggregatesInput, {nullable:true})
    having?: BillingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BillingCountAggregateInput, {nullable:true})
    _count?: BillingCountAggregateInput;

    @Field(() => BillingMinAggregateInput, {nullable:true})
    _min?: BillingMinAggregateInput;

    @Field(() => BillingMaxAggregateInput, {nullable:true})
    _max?: BillingMaxAggregateInput;
}
