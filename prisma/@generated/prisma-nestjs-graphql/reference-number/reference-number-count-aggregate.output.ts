import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReferenceNumberCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    prefix!: number;

    @Field(() => Int, {nullable:false})
    lastReference!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
