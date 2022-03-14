import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityEntityType } from '../prisma/activity-entity-type.enum';
import { ActivityPriority } from '../prisma/activity-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { ActivityCountAggregate } from './activity-count-aggregate.output';
import { ActivityMinAggregate } from './activity-min-aggregate.output';
import { ActivityMaxAggregate } from './activity-max-aggregate.output';

@ObjectType()
export class ActivityGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    entityId?: string;

    @Field(() => ActivityEntityType, {nullable:true})
    entityType?: keyof typeof ActivityEntityType;

    @Field(() => ActivityPriority, {nullable:true})
    priority?: keyof typeof ActivityPriority;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    message?: any;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    entity?: any;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => ActivityCountAggregate, {nullable:true})
    _count?: ActivityCountAggregate;

    @Field(() => ActivityMinAggregate, {nullable:true})
    _min?: ActivityMinAggregate;

    @Field(() => ActivityMaxAggregate, {nullable:true})
    _max?: ActivityMaxAggregate;
}
