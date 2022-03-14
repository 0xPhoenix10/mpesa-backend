import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShippingCountOrderByAggregateInput } from './shipping-count-order-by-aggregate.input';
import { ShippingAvgOrderByAggregateInput } from './shipping-avg-order-by-aggregate.input';
import { ShippingMaxOrderByAggregateInput } from './shipping-max-order-by-aggregate.input';
import { ShippingMinOrderByAggregateInput } from './shipping-min-order-by-aggregate.input';
import { ShippingSumOrderByAggregateInput } from './shipping-sum-order-by-aggregate.input';

@InputType()
export class ShippingOrderByWithAggregationInput {

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
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shippingType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shippingFee?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    walletId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isDefault?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seviVerified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ShippingCountOrderByAggregateInput, {nullable:true})
    _count?: ShippingCountOrderByAggregateInput;

    @Field(() => ShippingAvgOrderByAggregateInput, {nullable:true})
    _avg?: ShippingAvgOrderByAggregateInput;

    @Field(() => ShippingMaxOrderByAggregateInput, {nullable:true})
    _max?: ShippingMaxOrderByAggregateInput;

    @Field(() => ShippingMinOrderByAggregateInput, {nullable:true})
    _min?: ShippingMinOrderByAggregateInput;

    @Field(() => ShippingSumOrderByAggregateInput, {nullable:true})
    _sum?: ShippingSumOrderByAggregateInput;
}
