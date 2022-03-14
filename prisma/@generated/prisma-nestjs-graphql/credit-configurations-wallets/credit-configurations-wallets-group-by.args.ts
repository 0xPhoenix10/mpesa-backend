import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereInput } from './credit-configurations-wallets-where.input';
import { CreditConfigurationsWalletsOrderByWithAggregationInput } from './credit-configurations-wallets-order-by-with-aggregation.input';
import { CreditConfigurationsWalletsScalarFieldEnum } from './credit-configurations-wallets-scalar-field.enum';
import { CreditConfigurationsWalletsScalarWhereWithAggregatesInput } from './credit-configurations-wallets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CreditConfigurationsWalletsCountAggregateInput } from './credit-configurations-wallets-count-aggregate.input';
import { CreditConfigurationsWalletsAvgAggregateInput } from './credit-configurations-wallets-avg-aggregate.input';
import { CreditConfigurationsWalletsSumAggregateInput } from './credit-configurations-wallets-sum-aggregate.input';
import { CreditConfigurationsWalletsMinAggregateInput } from './credit-configurations-wallets-min-aggregate.input';
import { CreditConfigurationsWalletsMaxAggregateInput } from './credit-configurations-wallets-max-aggregate.input';

@ArgsType()
export class CreditConfigurationsWalletsGroupByArgs {

    @Field(() => CreditConfigurationsWalletsWhereInput, {nullable:true})
    where?: CreditConfigurationsWalletsWhereInput;

    @Field(() => [CreditConfigurationsWalletsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CreditConfigurationsWalletsOrderByWithAggregationInput>;

    @Field(() => [CreditConfigurationsWalletsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CreditConfigurationsWalletsScalarFieldEnum>;

    @Field(() => CreditConfigurationsWalletsScalarWhereWithAggregatesInput, {nullable:true})
    having?: CreditConfigurationsWalletsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CreditConfigurationsWalletsCountAggregateInput, {nullable:true})
    _count?: CreditConfigurationsWalletsCountAggregateInput;

    @Field(() => CreditConfigurationsWalletsAvgAggregateInput, {nullable:true})
    _avg?: CreditConfigurationsWalletsAvgAggregateInput;

    @Field(() => CreditConfigurationsWalletsSumAggregateInput, {nullable:true})
    _sum?: CreditConfigurationsWalletsSumAggregateInput;

    @Field(() => CreditConfigurationsWalletsMinAggregateInput, {nullable:true})
    _min?: CreditConfigurationsWalletsMinAggregateInput;

    @Field(() => CreditConfigurationsWalletsMaxAggregateInput, {nullable:true})
    _max?: CreditConfigurationsWalletsMaxAggregateInput;
}
