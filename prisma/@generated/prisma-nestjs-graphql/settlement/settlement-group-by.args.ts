import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementWhereInput } from './settlement-where.input';
import { SettlementOrderByWithAggregationInput } from './settlement-order-by-with-aggregation.input';
import { SettlementScalarFieldEnum } from './settlement-scalar-field.enum';
import { SettlementScalarWhereWithAggregatesInput } from './settlement-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SettlementCountAggregateInput } from './settlement-count-aggregate.input';
import { SettlementMinAggregateInput } from './settlement-min-aggregate.input';
import { SettlementMaxAggregateInput } from './settlement-max-aggregate.input';

@ArgsType()
export class SettlementGroupByArgs {

    @Field(() => SettlementWhereInput, {nullable:true})
    where?: SettlementWhereInput;

    @Field(() => [SettlementOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SettlementOrderByWithAggregationInput>;

    @Field(() => [SettlementScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SettlementScalarFieldEnum>;

    @Field(() => SettlementScalarWhereWithAggregatesInput, {nullable:true})
    having?: SettlementScalarWhereWithAggregatesInput;

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
