import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeWhereInput } from './badge-where.input';
import { BadgeOrderByWithRelationInput } from './badge-order-by-with-relation.input';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BadgeCountAggregateInput } from './badge-count-aggregate.input';
import { BadgeAvgAggregateInput } from './badge-avg-aggregate.input';
import { BadgeSumAggregateInput } from './badge-sum-aggregate.input';
import { BadgeMinAggregateInput } from './badge-min-aggregate.input';
import { BadgeMaxAggregateInput } from './badge-max-aggregate.input';

@ArgsType()
export class BadgeAggregateArgs {

    @Field(() => BadgeWhereInput, {nullable:true})
    where?: BadgeWhereInput;

    @Field(() => [BadgeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BadgeOrderByWithRelationInput>;

    @Field(() => BadgeWhereUniqueInput, {nullable:true})
    cursor?: BadgeWhereUniqueInput;

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
