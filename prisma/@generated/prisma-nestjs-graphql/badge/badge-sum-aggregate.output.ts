import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BadgeSumAggregate {

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => Int, {nullable:true})
    level?: number;
}
