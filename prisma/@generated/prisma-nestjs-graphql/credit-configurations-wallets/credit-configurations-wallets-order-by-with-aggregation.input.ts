import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CreditConfigurationsWalletsCountOrderByAggregateInput } from './credit-configurations-wallets-count-order-by-aggregate.input';
import { CreditConfigurationsWalletsAvgOrderByAggregateInput } from './credit-configurations-wallets-avg-order-by-aggregate.input';
import { CreditConfigurationsWalletsMaxOrderByAggregateInput } from './credit-configurations-wallets-max-order-by-aggregate.input';
import { CreditConfigurationsWalletsMinOrderByAggregateInput } from './credit-configurations-wallets-min-order-by-aggregate.input';
import { CreditConfigurationsWalletsSumOrderByAggregateInput } from './credit-configurations-wallets-sum-order-by-aggregate.input';

@InputType()
export class CreditConfigurationsWalletsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    configurationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    walletId?: keyof typeof SortOrder;

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

    @Field(() => CreditConfigurationsWalletsCountOrderByAggregateInput, {nullable:true})
    _count?: CreditConfigurationsWalletsCountOrderByAggregateInput;

    @Field(() => CreditConfigurationsWalletsAvgOrderByAggregateInput, {nullable:true})
    _avg?: CreditConfigurationsWalletsAvgOrderByAggregateInput;

    @Field(() => CreditConfigurationsWalletsMaxOrderByAggregateInput, {nullable:true})
    _max?: CreditConfigurationsWalletsMaxOrderByAggregateInput;

    @Field(() => CreditConfigurationsWalletsMinOrderByAggregateInput, {nullable:true})
    _min?: CreditConfigurationsWalletsMinOrderByAggregateInput;

    @Field(() => CreditConfigurationsWalletsSumOrderByAggregateInput, {nullable:true})
    _sum?: CreditConfigurationsWalletsSumOrderByAggregateInput;
}
