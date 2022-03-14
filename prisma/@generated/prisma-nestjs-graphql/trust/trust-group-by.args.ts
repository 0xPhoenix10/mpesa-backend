import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustWhereInput } from './trust-where.input';
import { TrustOrderByWithAggregationInput } from './trust-order-by-with-aggregation.input';
import { TrustScalarFieldEnum } from './trust-scalar-field.enum';
import { TrustScalarWhereWithAggregatesInput } from './trust-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TrustCountAggregateInput } from './trust-count-aggregate.input';
import { TrustAvgAggregateInput } from './trust-avg-aggregate.input';
import { TrustSumAggregateInput } from './trust-sum-aggregate.input';
import { TrustMinAggregateInput } from './trust-min-aggregate.input';
import { TrustMaxAggregateInput } from './trust-max-aggregate.input';

@ArgsType()
export class TrustGroupByArgs {

    @Field(() => TrustWhereInput, {nullable:true})
    where?: TrustWhereInput;

    @Field(() => [TrustOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TrustOrderByWithAggregationInput>;

    @Field(() => [TrustScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TrustScalarFieldEnum>;

    @Field(() => TrustScalarWhereWithAggregatesInput, {nullable:true})
    having?: TrustScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TrustCountAggregateInput, {nullable:true})
    _count?: TrustCountAggregateInput;

    @Field(() => TrustAvgAggregateInput, {nullable:true})
    _avg?: TrustAvgAggregateInput;

    @Field(() => TrustSumAggregateInput, {nullable:true})
    _sum?: TrustSumAggregateInput;

    @Field(() => TrustMinAggregateInput, {nullable:true})
    _min?: TrustMinAggregateInput;

    @Field(() => TrustMaxAggregateInput, {nullable:true})
    _max?: TrustMaxAggregateInput;
}
