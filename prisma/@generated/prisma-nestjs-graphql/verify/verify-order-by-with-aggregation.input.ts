import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VerifyCountOrderByAggregateInput } from './verify-count-order-by-aggregate.input';
import { VerifyMaxOrderByAggregateInput } from './verify-max-order-by-aggregate.input';
import { VerifyMinOrderByAggregateInput } from './verify-min-order-by-aggregate.input';

@InputType()
export class VerifyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    UID?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditConfigId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    OTP?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderPaymentMethod?: keyof typeof SortOrder;

    @Field(() => VerifyCountOrderByAggregateInput, {nullable:true})
    _count?: VerifyCountOrderByAggregateInput;

    @Field(() => VerifyMaxOrderByAggregateInput, {nullable:true})
    _max?: VerifyMaxOrderByAggregateInput;

    @Field(() => VerifyMinOrderByAggregateInput, {nullable:true})
    _min?: VerifyMinOrderByAggregateInput;
}
