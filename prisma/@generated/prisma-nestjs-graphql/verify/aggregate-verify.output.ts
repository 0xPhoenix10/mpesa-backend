import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VerifyCountAggregate } from './verify-count-aggregate.output';
import { VerifyMinAggregate } from './verify-min-aggregate.output';
import { VerifyMaxAggregate } from './verify-max-aggregate.output';

@ObjectType()
export class AggregateVerify {

    @Field(() => VerifyCountAggregate, {nullable:true})
    _count?: VerifyCountAggregate;

    @Field(() => VerifyMinAggregate, {nullable:true})
    _min?: VerifyMinAggregate;

    @Field(() => VerifyMaxAggregate, {nullable:true})
    _max?: VerifyMaxAggregate;
}
