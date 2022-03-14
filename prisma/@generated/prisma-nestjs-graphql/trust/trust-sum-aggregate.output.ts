import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TrustSumAggregate {

    @Field(() => Float, {nullable:true})
    trustRating?: number;

    @Field(() => Float, {nullable:true})
    score?: number;
}
