import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class WalletAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    balance?: keyof typeof SortOrder;
}
