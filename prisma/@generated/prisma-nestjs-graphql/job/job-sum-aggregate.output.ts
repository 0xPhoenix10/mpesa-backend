import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class JobSumAggregate {

    @Field(() => Int, {nullable:true})
    version?: number;
}
