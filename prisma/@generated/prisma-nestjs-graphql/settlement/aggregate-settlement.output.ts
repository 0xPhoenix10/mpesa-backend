import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SettlementCountAggregate } from './settlement-count-aggregate.output';
import { SettlementMinAggregate } from './settlement-min-aggregate.output';
import { SettlementMaxAggregate } from './settlement-max-aggregate.output';

@ObjectType()
export class AggregateSettlement {

    @Field(() => SettlementCountAggregate, {nullable:true})
    _count?: SettlementCountAggregate;

    @Field(() => SettlementMinAggregate, {nullable:true})
    _min?: SettlementMinAggregate;

    @Field(() => SettlementMaxAggregate, {nullable:true})
    _max?: SettlementMaxAggregate;
}
