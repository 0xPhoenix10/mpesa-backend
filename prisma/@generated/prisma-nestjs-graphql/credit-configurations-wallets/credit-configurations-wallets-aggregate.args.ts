import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereInput } from './credit-configurations-wallets-where.input';
import { CreditConfigurationsWalletsOrderByWithRelationInput } from './credit-configurations-wallets-order-by-with-relation.input';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CreditConfigurationsWalletsCountAggregateInput } from './credit-configurations-wallets-count-aggregate.input';
import { CreditConfigurationsWalletsAvgAggregateInput } from './credit-configurations-wallets-avg-aggregate.input';
import { CreditConfigurationsWalletsSumAggregateInput } from './credit-configurations-wallets-sum-aggregate.input';
import { CreditConfigurationsWalletsMinAggregateInput } from './credit-configurations-wallets-min-aggregate.input';
import { CreditConfigurationsWalletsMaxAggregateInput } from './credit-configurations-wallets-max-aggregate.input';

@ArgsType()
export class CreditConfigurationsWalletsAggregateArgs {

    @Field(() => CreditConfigurationsWalletsWhereInput, {nullable:true})
    where?: CreditConfigurationsWalletsWhereInput;

    @Field(() => [CreditConfigurationsWalletsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CreditConfigurationsWalletsOrderByWithRelationInput>;

    @Field(() => CreditConfigurationsWalletsWhereUniqueInput, {nullable:true})
    cursor?: CreditConfigurationsWalletsWhereUniqueInput;

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
