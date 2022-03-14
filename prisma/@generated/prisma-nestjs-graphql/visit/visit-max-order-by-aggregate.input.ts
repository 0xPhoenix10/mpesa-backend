import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VisitMaxOrderByAggregateInput {

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
}
