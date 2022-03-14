import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActivityEntityType } from '../prisma/activity-entity-type.enum';
import { ActivityPriority } from '../prisma/activity-priority.enum';

@ObjectType()
export class ActivityMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    entityId?: string;

    @Field(() => ActivityEntityType, {nullable:true})
    entityType?: keyof typeof ActivityEntityType;

    @Field(() => ActivityPriority, {nullable:true})
    priority?: keyof typeof ActivityPriority;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
