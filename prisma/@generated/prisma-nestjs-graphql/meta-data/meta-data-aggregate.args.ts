import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaDataWhereInput } from './meta-data-where.input';
import { MetaDataOrderByWithRelationInput } from './meta-data-order-by-with-relation.input';
import { MetaDataWhereUniqueInput } from './meta-data-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MetaDataCountAggregateInput } from './meta-data-count-aggregate.input';
import { MetaDataAvgAggregateInput } from './meta-data-avg-aggregate.input';
import { MetaDataSumAggregateInput } from './meta-data-sum-aggregate.input';
import { MetaDataMinAggregateInput } from './meta-data-min-aggregate.input';
import { MetaDataMaxAggregateInput } from './meta-data-max-aggregate.input';

@ArgsType()
export class MetaDataAggregateArgs {

    @Field(() => MetaDataWhereInput, {nullable:true})
    where?: MetaDataWhereInput;

    @Field(() => [MetaDataOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MetaDataOrderByWithRelationInput>;

    @Field(() => MetaDataWhereUniqueInput, {nullable:true})
    cursor?: MetaDataWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MetaDataCountAggregateInput, {nullable:true})
    _count?: MetaDataCountAggregateInput;

    @Field(() => MetaDataAvgAggregateInput, {nullable:true})
    _avg?: MetaDataAvgAggregateInput;

    @Field(() => MetaDataSumAggregateInput, {nullable:true})
    _sum?: MetaDataSumAggregateInput;

    @Field(() => MetaDataMinAggregateInput, {nullable:true})
    _min?: MetaDataMinAggregateInput;

    @Field(() => MetaDataMaxAggregateInput, {nullable:true})
    _max?: MetaDataMaxAggregateInput;
}
