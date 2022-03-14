import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ReferenceNumberAvgAggregate {

    @Field(() => Float, {nullable:true})
    lastReference?: number;
}
