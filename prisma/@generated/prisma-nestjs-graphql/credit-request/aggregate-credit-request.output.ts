import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CreditRequestCountAggregate } from './credit-request-count-aggregate.output';
import { CreditRequestMinAggregate } from './credit-request-min-aggregate.output';
import { CreditRequestMaxAggregate } from './credit-request-max-aggregate.output';

@ObjectType()
export class AggregateCreditRequest {

    @Field(() => CreditRequestCountAggregate, {nullable:true})
    _count?: CreditRequestCountAggregate;

    @Field(() => CreditRequestMinAggregate, {nullable:true})
    _min?: CreditRequestMinAggregate;

    @Field(() => CreditRequestMaxAggregate, {nullable:true})
    _max?: CreditRequestMaxAggregate;
}
