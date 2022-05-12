import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CreditSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentsCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentsCountPaid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPaid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalToPay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundUpfrontAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountWithFees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payNowAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seviFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderWalletShareFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundPostDeliveryAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payLaterAmount?: keyof typeof SortOrder;
}
