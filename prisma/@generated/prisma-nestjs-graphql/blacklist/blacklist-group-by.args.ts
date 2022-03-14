import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistWhereInput } from './blacklist-where.input';
import { BlacklistOrderByWithAggregationInput } from './blacklist-order-by-with-aggregation.input';
import { BlacklistScalarFieldEnum } from './blacklist-scalar-field.enum';
import { BlacklistScalarWhereWithAggregatesInput } from './blacklist-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BlacklistCountAggregateInput } from './blacklist-count-aggregate.input';
import { BlacklistMinAggregateInput } from './blacklist-min-aggregate.input';
import { BlacklistMaxAggregateInput } from './blacklist-max-aggregate.input';

@ArgsType()
export class BlacklistGroupByArgs {

    @Field(() => BlacklistWhereInput, {nullable:true})
    where?: BlacklistWhereInput;

    @Field(() => [BlacklistOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BlacklistOrderByWithAggregationInput>;

    @Field(() => [BlacklistScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BlacklistScalarFieldEnum>;

    @Field(() => BlacklistScalarWhereWithAggregatesInput, {nullable:true})
    having?: BlacklistScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BlacklistCountAggregateInput, {nullable:true})
    _count?: BlacklistCountAggregateInput;

    @Field(() => BlacklistMinAggregateInput, {nullable:true})
    _min?: BlacklistMinAggregateInput;

    @Field(() => BlacklistMaxAggregateInput, {nullable:true})
    _max?: BlacklistMaxAggregateInput;
}
