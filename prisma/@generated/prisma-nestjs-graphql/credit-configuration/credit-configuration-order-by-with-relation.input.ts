import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';
import { CreditOrderByRelationAggregateInput } from '../credit/credit-order-by-relation-aggregate.input';
import { CreditConfigurationsWalletsOrderByRelationAggregateInput } from '../credit-configurations-wallets/credit-configurations-wallets-order-by-relation-aggregate.input';
import { InstallmentOrderByRelationAggregateInput } from '../installment/installment-order-by-relation-aggregate.input';
import { CreditRequestOrderByWithRelationInput } from '../credit-request/credit-request-order-by-with-relation.input';

@InputType()
export class CreditConfigurationOrderByWithRelationInput {

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

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    wallet?: WalletOrderByWithRelationInput;

    @Field(() => CreditOrderByRelationAggregateInput, {nullable:true})
    credit?: CreditOrderByRelationAggregateInput;

    @Field(() => CreditConfigurationsWalletsOrderByRelationAggregateInput, {nullable:true})
    attachedWallets?: CreditConfigurationsWalletsOrderByRelationAggregateInput;

    @Field(() => InstallmentOrderByRelationAggregateInput, {nullable:true})
    Installment?: InstallmentOrderByRelationAggregateInput;

    @Field(() => CreditRequestOrderByWithRelationInput, {nullable:true})
    creditRequests?: CreditRequestOrderByWithRelationInput;
}
