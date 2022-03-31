import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeType } from '../prisma/badge-type.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class BadgeCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Int, {nullable:true})
    level?: number;
}
