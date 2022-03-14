import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ActivityEntityType } from '../prisma/activity-entity-type.enum';
import { ActivityPriority } from '../prisma/activity-priority.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';

@ObjectType()
export class Activity {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    entityId!: string | null;

    @Field(() => ActivityEntityType, {nullable:true})
    entityType!: keyof typeof ActivityEntityType | null;

    @Field(() => ActivityPriority, {nullable:true})
    priority!: keyof typeof ActivityPriority | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    message!: any | null;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    isRead!: boolean | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => GraphQLJSON, {nullable:true})
    entity!: any | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
