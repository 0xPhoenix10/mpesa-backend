import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BadgeType } from '../prisma/badge-type.enum';
import { Int } from '@nestjs/graphql';
import { BadgeCountAggregate } from './badge-count-aggregate.output';
import { BadgeAvgAggregate } from './badge-avg-aggregate.output';
import { BadgeSumAggregate } from './badge-sum-aggregate.output';
import { BadgeMinAggregate } from './badge-min-aggregate.output';
import { BadgeMaxAggregate } from './badge-max-aggregate.output';

@ObjectType()
export class BadgeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => BadgeType, {nullable:true})
    type?: keyof typeof BadgeType;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => BadgeCountAggregate, {nullable:true})
    _count?: BadgeCountAggregate;

    @Field(() => BadgeAvgAggregate, {nullable:true})
    _avg?: BadgeAvgAggregate;

    @Field(() => BadgeSumAggregate, {nullable:true})
    _sum?: BadgeSumAggregate;

    @Field(() => BadgeMinAggregate, {nullable:true})
    _min?: BadgeMinAggregate;

    @Field(() => BadgeMaxAggregate, {nullable:true})
    _max?: BadgeMaxAggregate;
}
