import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CreditConfigurationMinOrderByAggregateInput {

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
}
