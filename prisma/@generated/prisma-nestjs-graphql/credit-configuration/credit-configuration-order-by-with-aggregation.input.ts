import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CreditConfigurationCountOrderByAggregateInput } from './credit-configuration-count-order-by-aggregate.input';
import { CreditConfigurationAvgOrderByAggregateInput } from './credit-configuration-avg-order-by-aggregate.input';
import { CreditConfigurationMaxOrderByAggregateInput } from './credit-configuration-max-order-by-aggregate.input';
import { CreditConfigurationMinOrderByAggregateInput } from './credit-configuration-min-order-by-aggregate.input';
import { CreditConfigurationSumOrderByAggregateInput } from './credit-configuration-sum-order-by-aggregate.input';

@InputType()
export class CreditConfigurationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shouldPayDeposit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    depositPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seviFeesPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    daysToStartAfterDelivery?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lateInstallmentFeesPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliatePercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditLateFeesPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditLateDays?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    numberOfAllowedCredits?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundFeesPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundId?: keyof typeof SortOrder;

    @Field(() => CreditConfigurationCountOrderByAggregateInput, {nullable:true})
    _count?: CreditConfigurationCountOrderByAggregateInput;

    @Field(() => CreditConfigurationAvgOrderByAggregateInput, {nullable:true})
    _avg?: CreditConfigurationAvgOrderByAggregateInput;

    @Field(() => CreditConfigurationMaxOrderByAggregateInput, {nullable:true})
    _max?: CreditConfigurationMaxOrderByAggregateInput;

    @Field(() => CreditConfigurationMinOrderByAggregateInput, {nullable:true})
    _min?: CreditConfigurationMinOrderByAggregateInput;

    @Field(() => CreditConfigurationSumOrderByAggregateInput, {nullable:true})
    _sum?: CreditConfigurationSumOrderByAggregateInput;
}
