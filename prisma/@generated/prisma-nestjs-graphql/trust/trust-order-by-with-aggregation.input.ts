import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TrustCountOrderByAggregateInput } from './trust-count-order-by-aggregate.input';
import { TrustAvgOrderByAggregateInput } from './trust-avg-order-by-aggregate.input';
import { TrustMaxOrderByAggregateInput } from './trust-max-order-by-aggregate.input';
import { TrustMinOrderByAggregateInput } from './trust-min-order-by-aggregate.input';
import { TrustSumOrderByAggregateInput } from './trust-sum-order-by-aggregate.input';

@InputType()
export class TrustOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trustRating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    score?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => TrustCountOrderByAggregateInput, {nullable:true})
    _count?: TrustCountOrderByAggregateInput;

    @Field(() => TrustAvgOrderByAggregateInput, {nullable:true})
    _avg?: TrustAvgOrderByAggregateInput;

    @Field(() => TrustMaxOrderByAggregateInput, {nullable:true})
    _max?: TrustMaxOrderByAggregateInput;

    @Field(() => TrustMinOrderByAggregateInput, {nullable:true})
    _min?: TrustMinOrderByAggregateInput;

    @Field(() => TrustSumOrderByAggregateInput, {nullable:true})
    _sum?: TrustSumOrderByAggregateInput;
}
