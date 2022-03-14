import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReferenceNumberCountAggregate } from './reference-number-count-aggregate.output';
import { ReferenceNumberAvgAggregate } from './reference-number-avg-aggregate.output';
import { ReferenceNumberSumAggregate } from './reference-number-sum-aggregate.output';
import { ReferenceNumberMinAggregate } from './reference-number-min-aggregate.output';
import { ReferenceNumberMaxAggregate } from './reference-number-max-aggregate.output';

@ObjectType()
export class AggregateReferenceNumber {

    @Field(() => ReferenceNumberCountAggregate, {nullable:true})
    _count?: ReferenceNumberCountAggregate;

    @Field(() => ReferenceNumberAvgAggregate, {nullable:true})
    _avg?: ReferenceNumberAvgAggregate;

    @Field(() => ReferenceNumberSumAggregate, {nullable:true})
    _sum?: ReferenceNumberSumAggregate;

    @Field(() => ReferenceNumberMinAggregate, {nullable:true})
    _min?: ReferenceNumberMinAggregate;

    @Field(() => ReferenceNumberMaxAggregate, {nullable:true})
    _max?: ReferenceNumberMaxAggregate;
}
