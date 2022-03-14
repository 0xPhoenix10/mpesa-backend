import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CreditConfigurationsWalletsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    upfrontPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundFeesPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxOrderAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxOutstandingCredit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shareFeesPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postDeliveryPercentage?: keyof typeof SortOrder;
}
