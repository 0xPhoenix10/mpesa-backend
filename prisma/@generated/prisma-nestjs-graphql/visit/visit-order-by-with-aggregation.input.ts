import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VisitCountOrderByAggregateInput } from './visit-count-order-by-aggregate.input';
import { VisitMaxOrderByAggregateInput } from './visit-max-order-by-aggregate.input';
import { VisitMinOrderByAggregateInput } from './visit-min-order-by-aggregate.input';

@InputType()
export class VisitOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visitedBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visitedByReference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    whenVisitTookPlace?: keyof typeof SortOrder;

    @Field(() => VisitCountOrderByAggregateInput, {nullable:true})
    _count?: VisitCountOrderByAggregateInput;

    @Field(() => VisitMaxOrderByAggregateInput, {nullable:true})
    _max?: VisitMaxOrderByAggregateInput;

    @Field(() => VisitMinOrderByAggregateInput, {nullable:true})
    _min?: VisitMinOrderByAggregateInput;
}
