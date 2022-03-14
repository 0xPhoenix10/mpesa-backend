import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MetaDataCountAggregate } from './meta-data-count-aggregate.output';
import { MetaDataAvgAggregate } from './meta-data-avg-aggregate.output';
import { MetaDataSumAggregate } from './meta-data-sum-aggregate.output';
import { MetaDataMinAggregate } from './meta-data-min-aggregate.output';
import { MetaDataMaxAggregate } from './meta-data-max-aggregate.output';

@ObjectType()
export class AggregateMetaData {

    @Field(() => MetaDataCountAggregate, {nullable:true})
    _count?: MetaDataCountAggregate;

    @Field(() => MetaDataAvgAggregate, {nullable:true})
    _avg?: MetaDataAvgAggregate;

    @Field(() => MetaDataSumAggregate, {nullable:true})
    _sum?: MetaDataSumAggregate;

    @Field(() => MetaDataMinAggregate, {nullable:true})
    _min?: MetaDataMinAggregate;

    @Field(() => MetaDataMaxAggregate, {nullable:true})
    _max?: MetaDataMaxAggregate;
}
