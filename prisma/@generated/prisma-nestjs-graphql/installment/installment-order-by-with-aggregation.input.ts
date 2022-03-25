import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InstallmentCountOrderByAggregateInput } from './installment-count-order-by-aggregate.input';
import { InstallmentAvgOrderByAggregateInput } from './installment-avg-order-by-aggregate.input';
import { InstallmentMaxOrderByAggregateInput } from './installment-max-order-by-aggregate.input';
import { InstallmentMinOrderByAggregateInput } from './installment-min-order-by-aggregate.input';
import { InstallmentSumOrderByAggregateInput } from './installment-sum-order-by-aggregate.input';

@InputType()
export class InstallmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    debtorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstTryFailedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountWithPenalty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seviFees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    penalty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditConfigurationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliateFees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => InstallmentCountOrderByAggregateInput, {nullable:true})
    _count?: InstallmentCountOrderByAggregateInput;

    @Field(() => InstallmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstallmentAvgOrderByAggregateInput;

    @Field(() => InstallmentMaxOrderByAggregateInput, {nullable:true})
    _max?: InstallmentMaxOrderByAggregateInput;

    @Field(() => InstallmentMinOrderByAggregateInput, {nullable:true})
    _min?: InstallmentMinOrderByAggregateInput;

    @Field(() => InstallmentSumOrderByAggregateInput, {nullable:true})
    _sum?: InstallmentSumOrderByAggregateInput;
}
