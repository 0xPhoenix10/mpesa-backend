import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityEntityType } from '../prisma/activity-entity-type.enum';
import { ActivityPriority } from '../prisma/activity-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ActivityUncheckedCreateWithoutUserInput {

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

    @Field(() => GraphQLJSON, {nullable:true})
    message?: any;

    @Field(() => Boolean, {nullable:true})
    isRead?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    entity?: any;
}
