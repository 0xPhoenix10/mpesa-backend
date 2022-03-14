import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MetaDataAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    maxBuyerOrderAmount?: keyof typeof SortOrder;
}
