import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeWhereInput } from './badge-where.input';
import { BadgeOrderByWithAggregationInput } from './badge-order-by-with-aggregation.input';
import { BadgeScalarFieldEnum } from './badge-scalar-field.enum';
import { BadgeScalarWhereWithAggregatesInput } from './badge-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BadgeCountAggregateInput } from './badge-count-aggregate.input';
import { BadgeAvgAggregateInput } from './badge-avg-aggregate.input';
import { BadgeSumAggregateInput } from './badge-sum-aggregate.input';
import { BadgeMinAggregateInput } from './badge-min-aggregate.input';
import { BadgeMaxAggregateInput } from './badge-max-aggregate.input';

@ArgsType()
export class BadgeGroupByArgs {

    @Field(() => BadgeWhereInput, {nullable:true})
    where?: BadgeWhereInput;

    @Field(() => [BadgeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BadgeOrderByWithAggregationInput>;

    @Field(() => [BadgeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BadgeScalarFieldEnum>;

    @Field(() => BadgeScalarWhereWithAggregatesInput, {nullable:true})
    having?: BadgeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BadgeCountAggregateInput, {nullable:true})
    _count?: BadgeCountAggregateInput;

    @Field(() => BadgeAvgAggregateInput, {nullable:true})
    _avg?: BadgeAvgAggregateInput;

    @Field(() => BadgeSumAggregateInput, {nullable:true})
    _sum?: BadgeSumAggregateInput;

    @Field(() => BadgeMinAggregateInput, {nullable:true})
    _min?: BadgeMinAggregateInput;

    @Field(() => BadgeMaxAggregateInput, {nullable:true})
    _max?: BadgeMaxAggregateInput;
}
