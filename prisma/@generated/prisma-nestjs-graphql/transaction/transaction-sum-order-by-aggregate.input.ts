import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TransactionSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fee?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balanceAfter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balanceBefore?: keyof typeof SortOrder;
}
