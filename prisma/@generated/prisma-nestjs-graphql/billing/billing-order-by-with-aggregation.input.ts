import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BillingCountOrderByAggregateInput } from './billing-count-order-by-aggregate.input';
import { BillingMaxOrderByAggregateInput } from './billing-max-order-by-aggregate.input';
import { BillingMinOrderByAggregateInput } from './billing-min-order-by-aggregate.input';

@InputType()
export class BillingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    company?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postcode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    walletId?: keyof typeof SortOrder;

    @Field(() => BillingCountOrderByAggregateInput, {nullable:true})
    _count?: BillingCountOrderByAggregateInput;

    @Field(() => BillingMaxOrderByAggregateInput, {nullable:true})
    _max?: BillingMaxOrderByAggregateInput;

    @Field(() => BillingMinOrderByAggregateInput, {nullable:true})
    _min?: BillingMinOrderByAggregateInput;
}
