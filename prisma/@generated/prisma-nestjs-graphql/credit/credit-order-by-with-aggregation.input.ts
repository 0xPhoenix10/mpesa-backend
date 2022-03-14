import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CreditCountOrderByAggregateInput } from './credit-count-order-by-aggregate.input';
import { CreditAvgOrderByAggregateInput } from './credit-avg-order-by-aggregate.input';
import { CreditMaxOrderByAggregateInput } from './credit-max-order-by-aggregate.input';
import { CreditMinOrderByAggregateInput } from './credit-min-order-by-aggregate.input';
import { CreditSumOrderByAggregateInput } from './credit-sum-order-by-aggregate.input';

@InputType()
export class CreditOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    debtorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentsCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentsCountPaid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPaid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalToPay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agreedDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditConfigurationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    durationSlices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    defaultAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundUpfrontAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderWalletId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountWithFees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seviFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderWalletShareFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundPostDeliveryAmount?: keyof typeof SortOrder;

    @Field(() => CreditCountOrderByAggregateInput, {nullable:true})
    _count?: CreditCountOrderByAggregateInput;

    @Field(() => CreditAvgOrderByAggregateInput, {nullable:true})
    _avg?: CreditAvgOrderByAggregateInput;

    @Field(() => CreditMaxOrderByAggregateInput, {nullable:true})
    _max?: CreditMaxOrderByAggregateInput;

    @Field(() => CreditMinOrderByAggregateInput, {nullable:true})
    _min?: CreditMinOrderByAggregateInput;

    @Field(() => CreditSumOrderByAggregateInput, {nullable:true})
    _sum?: CreditSumOrderByAggregateInput;
}
