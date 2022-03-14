import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CreditRequestCountOrderByAggregateInput } from './credit-request-count-order-by-aggregate.input';
import { CreditRequestMaxOrderByAggregateInput } from './credit-request-max-order-by-aggregate.input';
import { CreditRequestMinOrderByAggregateInput } from './credit-request-min-order-by-aggregate.input';

@InputType()
export class CreditRequestOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wallet?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditConfigurationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    proceedAt?: keyof typeof SortOrder;

    @Field(() => CreditRequestCountOrderByAggregateInput, {nullable:true})
    _count?: CreditRequestCountOrderByAggregateInput;

    @Field(() => CreditRequestMaxOrderByAggregateInput, {nullable:true})
    _max?: CreditRequestMaxOrderByAggregateInput;

    @Field(() => CreditRequestMinOrderByAggregateInput, {nullable:true})
    _min?: CreditRequestMinOrderByAggregateInput;
}
