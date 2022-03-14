import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class JobAvgAggregate {

    @Field(() => Float, {nullable:true})
    version?: number;
}
