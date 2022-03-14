import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CreditCountAggregate } from './credit-count-aggregate.output';
import { CreditAvgAggregate } from './credit-avg-aggregate.output';
import { CreditSumAggregate } from './credit-sum-aggregate.output';
import { CreditMinAggregate } from './credit-min-aggregate.output';
import { CreditMaxAggregate } from './credit-max-aggregate.output';

@ObjectType()
export class AggregateCredit {

    @Field(() => CreditCountAggregate, {nullable:true})
    _count?: CreditCountAggregate;

    @Field(() => CreditAvgAggregate, {nullable:true})
    _avg?: CreditAvgAggregate;

    @Field(() => CreditSumAggregate, {nullable:true})
    _sum?: CreditSumAggregate;

    @Field(() => CreditMinAggregate, {nullable:true})
    _min?: CreditMinAggregate;

    @Field(() => CreditMaxAggregate, {nullable:true})
    _max?: CreditMaxAggregate;
}
