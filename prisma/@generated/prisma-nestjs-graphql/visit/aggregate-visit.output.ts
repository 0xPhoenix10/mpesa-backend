import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VisitCountAggregate } from './visit-count-aggregate.output';
import { VisitMinAggregate } from './visit-min-aggregate.output';
import { VisitMaxAggregate } from './visit-max-aggregate.output';

@ObjectType()
export class AggregateVisit {

    @Field(() => VisitCountAggregate, {nullable:true})
    _count?: VisitCountAggregate;

    @Field(() => VisitMinAggregate, {nullable:true})
    _min?: VisitMinAggregate;

    @Field(() => VisitMaxAggregate, {nullable:true})
    _max?: VisitMaxAggregate;
}
