import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ReferenceNumberSumAggregate {

    @Field(() => Int, {nullable:true})
    lastReference?: number;
}
