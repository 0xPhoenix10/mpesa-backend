import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BlacklistCountOrderByAggregateInput } from './blacklist-count-order-by-aggregate.input';
import { BlacklistMaxOrderByAggregateInput } from './blacklist-max-order-by-aggregate.input';
import { BlacklistMinOrderByAggregateInput } from './blacklist-min-order-by-aggregate.input';

@InputType()
export class BlacklistOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taxId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => BlacklistCountOrderByAggregateInput, {nullable:true})
    _count?: BlacklistCountOrderByAggregateInput;

    @Field(() => BlacklistMaxOrderByAggregateInput, {nullable:true})
    _max?: BlacklistMaxOrderByAggregateInput;

    @Field(() => BlacklistMinOrderByAggregateInput, {nullable:true})
    _min?: BlacklistMinOrderByAggregateInput;
}
