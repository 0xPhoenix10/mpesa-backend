import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityCountAggregate } from './activity-count-aggregate.output';
import { ActivityMinAggregate } from './activity-min-aggregate.output';
import { ActivityMaxAggregate } from './activity-max-aggregate.output';

@ObjectType()
export class AggregateActivity {

    @Field(() => ActivityCountAggregate, {nullable:true})
    _count?: ActivityCountAggregate;

    @Field(() => ActivityMinAggregate, {nullable:true})
    _min?: ActivityMinAggregate;

    @Field(() => ActivityMaxAggregate, {nullable:true})
    _max?: ActivityMaxAggregate;
}
