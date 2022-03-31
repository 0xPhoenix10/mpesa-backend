import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BadgeAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;
}
