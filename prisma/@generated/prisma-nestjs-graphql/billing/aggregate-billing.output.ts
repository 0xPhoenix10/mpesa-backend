import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BillingCountAggregate } from './billing-count-aggregate.output';
import { BillingMinAggregate } from './billing-min-aggregate.output';
import { BillingMaxAggregate } from './billing-max-aggregate.output';

@ObjectType()
export class AggregateBilling {

    @Field(() => BillingCountAggregate, {nullable:true})
    _count?: BillingCountAggregate;

    @Field(() => BillingMinAggregate, {nullable:true})
    _min?: BillingMinAggregate;

    @Field(() => BillingMaxAggregate, {nullable:true})
    _max?: BillingMaxAggregate;
}
