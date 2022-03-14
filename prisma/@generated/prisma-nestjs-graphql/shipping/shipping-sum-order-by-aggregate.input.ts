import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ShippingSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    shippingFee?: keyof typeof SortOrder;
}
