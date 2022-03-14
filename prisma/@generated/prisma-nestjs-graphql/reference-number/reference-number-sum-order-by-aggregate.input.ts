import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ReferenceNumberSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    lastReference?: keyof typeof SortOrder;
}
