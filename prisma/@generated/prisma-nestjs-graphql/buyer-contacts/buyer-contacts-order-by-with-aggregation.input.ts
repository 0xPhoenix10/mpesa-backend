import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BuyerContactsCountOrderByAggregateInput } from './buyer-contacts-count-order-by-aggregate.input';
import { BuyerContactsMaxOrderByAggregateInput } from './buyer-contacts-max-order-by-aggregate.input';
import { BuyerContactsMinOrderByAggregateInput } from './buyer-contacts-min-order-by-aggregate.input';

@InputType()
export class BuyerContactsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    walletId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BuyerContactsCountOrderByAggregateInput, {nullable:true})
    _count?: BuyerContactsCountOrderByAggregateInput;

    @Field(() => BuyerContactsMaxOrderByAggregateInput, {nullable:true})
    _max?: BuyerContactsMaxOrderByAggregateInput;

    @Field(() => BuyerContactsMinOrderByAggregateInput, {nullable:true})
    _min?: BuyerContactsMinOrderByAggregateInput;
}
