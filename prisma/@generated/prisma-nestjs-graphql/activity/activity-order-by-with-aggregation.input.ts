import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActivityCountOrderByAggregateInput } from './activity-count-order-by-aggregate.input';
import { ActivityMaxOrderByAggregateInput } from './activity-max-order-by-aggregate.input';
import { ActivityMinOrderByAggregateInput } from './activity-min-order-by-aggregate.input';

@InputType()
export class ActivityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entityType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priority?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isRead?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ActivityCountOrderByAggregateInput, {nullable:true})
    _count?: ActivityCountOrderByAggregateInput;

    @Field(() => ActivityMaxOrderByAggregateInput, {nullable:true})
    _max?: ActivityMaxOrderByAggregateInput;

    @Field(() => ActivityMinOrderByAggregateInput, {nullable:true})
    _min?: ActivityMinOrderByAggregateInput;
}
