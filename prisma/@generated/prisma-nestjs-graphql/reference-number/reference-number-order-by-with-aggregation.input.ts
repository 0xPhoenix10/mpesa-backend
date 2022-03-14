import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReferenceNumberCountOrderByAggregateInput } from './reference-number-count-order-by-aggregate.input';
import { ReferenceNumberAvgOrderByAggregateInput } from './reference-number-avg-order-by-aggregate.input';
import { ReferenceNumberMaxOrderByAggregateInput } from './reference-number-max-order-by-aggregate.input';
import { ReferenceNumberMinOrderByAggregateInput } from './reference-number-min-order-by-aggregate.input';
import { ReferenceNumberSumOrderByAggregateInput } from './reference-number-sum-order-by-aggregate.input';

@InputType()
export class ReferenceNumberOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    prefix?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastReference?: keyof typeof SortOrder;

    @Field(() => ReferenceNumberCountOrderByAggregateInput, {nullable:true})
    _count?: ReferenceNumberCountOrderByAggregateInput;

    @Field(() => ReferenceNumberAvgOrderByAggregateInput, {nullable:true})
    _avg?: ReferenceNumberAvgOrderByAggregateInput;

    @Field(() => ReferenceNumberMaxOrderByAggregateInput, {nullable:true})
    _max?: ReferenceNumberMaxOrderByAggregateInput;

    @Field(() => ReferenceNumberMinOrderByAggregateInput, {nullable:true})
    _min?: ReferenceNumberMinOrderByAggregateInput;

    @Field(() => ReferenceNumberSumOrderByAggregateInput, {nullable:true})
    _sum?: ReferenceNumberSumOrderByAggregateInput;
}
