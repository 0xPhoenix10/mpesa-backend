import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BlacklistCountAggregate } from './blacklist-count-aggregate.output';
import { BlacklistMinAggregate } from './blacklist-min-aggregate.output';
import { BlacklistMaxAggregate } from './blacklist-max-aggregate.output';

@ObjectType()
export class AggregateBlacklist {

    @Field(() => BlacklistCountAggregate, {nullable:true})
    _count?: BlacklistCountAggregate;

    @Field(() => BlacklistMinAggregate, {nullable:true})
    _min?: BlacklistMinAggregate;

    @Field(() => BlacklistMaxAggregate, {nullable:true})
    _max?: BlacklistMaxAggregate;
}
