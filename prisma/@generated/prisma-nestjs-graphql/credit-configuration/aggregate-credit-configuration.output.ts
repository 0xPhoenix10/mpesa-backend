import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CreditConfigurationCountAggregate } from './credit-configuration-count-aggregate.output';
import { CreditConfigurationAvgAggregate } from './credit-configuration-avg-aggregate.output';
import { CreditConfigurationSumAggregate } from './credit-configuration-sum-aggregate.output';
import { CreditConfigurationMinAggregate } from './credit-configuration-min-aggregate.output';
import { CreditConfigurationMaxAggregate } from './credit-configuration-max-aggregate.output';

@ObjectType()
export class AggregateCreditConfiguration {

    @Field(() => CreditConfigurationCountAggregate, {nullable:true})
    _count?: CreditConfigurationCountAggregate;

    @Field(() => CreditConfigurationAvgAggregate, {nullable:true})
    _avg?: CreditConfigurationAvgAggregate;

    @Field(() => CreditConfigurationSumAggregate, {nullable:true})
    _sum?: CreditConfigurationSumAggregate;

    @Field(() => CreditConfigurationMinAggregate, {nullable:true})
    _min?: CreditConfigurationMinAggregate;

    @Field(() => CreditConfigurationMaxAggregate, {nullable:true})
    _max?: CreditConfigurationMaxAggregate;
}
