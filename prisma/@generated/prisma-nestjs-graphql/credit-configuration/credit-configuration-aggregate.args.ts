import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationWhereInput } from './credit-configuration-where.input';
import { CreditConfigurationOrderByWithRelationInput } from './credit-configuration-order-by-with-relation.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CreditConfigurationCountAggregateInput } from './credit-configuration-count-aggregate.input';
import { CreditConfigurationAvgAggregateInput } from './credit-configuration-avg-aggregate.input';
import { CreditConfigurationSumAggregateInput } from './credit-configuration-sum-aggregate.input';
import { CreditConfigurationMinAggregateInput } from './credit-configuration-min-aggregate.input';
import { CreditConfigurationMaxAggregateInput } from './credit-configuration-max-aggregate.input';

@ArgsType()
export class CreditConfigurationAggregateArgs {

    @Field(() => CreditConfigurationWhereInput, {nullable:true})
    where?: CreditConfigurationWhereInput;

    @Field(() => [CreditConfigurationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CreditConfigurationOrderByWithRelationInput>;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    cursor?: CreditConfigurationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CreditConfigurationCountAggregateInput, {nullable:true})
    _count?: CreditConfigurationCountAggregateInput;

    @Field(() => CreditConfigurationAvgAggregateInput, {nullable:true})
    _avg?: CreditConfigurationAvgAggregateInput;

    @Field(() => CreditConfigurationSumAggregateInput, {nullable:true})
    _sum?: CreditConfigurationSumAggregateInput;

    @Field(() => CreditConfigurationMinAggregateInput, {nullable:true})
    _min?: CreditConfigurationMinAggregateInput;

    @Field(() => CreditConfigurationMaxAggregateInput, {nullable:true})
    _max?: CreditConfigurationMaxAggregateInput;
}
