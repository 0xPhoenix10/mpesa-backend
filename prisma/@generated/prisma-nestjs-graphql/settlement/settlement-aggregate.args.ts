import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementWhereInput } from './settlement-where.input';
import { SettlementOrderByWithRelationInput } from './settlement-order-by-with-relation.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SettlementCountAggregateInput } from './settlement-count-aggregate.input';
import { SettlementMinAggregateInput } from './settlement-min-aggregate.input';
import { SettlementMaxAggregateInput } from './settlement-max-aggregate.input';

@ArgsType()
export class SettlementAggregateArgs {

    @Field(() => SettlementWhereInput, {nullable:true})
    where?: SettlementWhereInput;

    @Field(() => [SettlementOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SettlementOrderByWithRelationInput>;

    @Field(() => SettlementWhereUniqueInput, {nullable:true})
    cursor?: SettlementWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SettlementCountAggregateInput, {nullable:true})
    _count?: SettlementCountAggregateInput;

    @Field(() => SettlementMinAggregateInput, {nullable:true})
    _min?: SettlementMinAggregateInput;

    @Field(() => SettlementMaxAggregateInput, {nullable:true})
    _max?: SettlementMaxAggregateInput;
}
