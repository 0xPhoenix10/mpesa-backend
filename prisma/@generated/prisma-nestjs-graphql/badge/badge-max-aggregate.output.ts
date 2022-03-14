import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BadgeType } from '../prisma/badge-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BadgeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    account?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => BadgeType, {nullable:true})
    type?: keyof typeof BadgeType;

    @Field(() => Int, {nullable:true})
    count?: number;
}
