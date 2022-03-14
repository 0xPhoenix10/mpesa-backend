import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ShippingAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    shippingFee?: keyof typeof SortOrder;
}
