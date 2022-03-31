import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BadgeCountOrderByAggregateInput } from './badge-count-order-by-aggregate.input';
import { BadgeAvgOrderByAggregateInput } from './badge-avg-order-by-aggregate.input';
import { BadgeMaxOrderByAggregateInput } from './badge-max-order-by-aggregate.input';
import { BadgeMinOrderByAggregateInput } from './badge-min-order-by-aggregate.input';
import { BadgeSumOrderByAggregateInput } from './badge-sum-order-by-aggregate.input';

@InputType()
export class BadgeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;

    @Field(() => BadgeCountOrderByAggregateInput, {nullable:true})
    _count?: BadgeCountOrderByAggregateInput;

    @Field(() => BadgeAvgOrderByAggregateInput, {nullable:true})
    _avg?: BadgeAvgOrderByAggregateInput;

    @Field(() => BadgeMaxOrderByAggregateInput, {nullable:true})
    _max?: BadgeMaxOrderByAggregateInput;

    @Field(() => BadgeMinOrderByAggregateInput, {nullable:true})
    _min?: BadgeMinOrderByAggregateInput;

    @Field(() => BadgeSumOrderByAggregateInput, {nullable:true})
    _sum?: BadgeSumOrderByAggregateInput;
}
