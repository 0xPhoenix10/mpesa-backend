import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VisitCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    account!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    visitedBy!: number;

    @Field(() => Int, {nullable:false})
    visitedByReference!: number;

    @Field(() => Int, {nullable:false})
    whenVisitTookPlace!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
