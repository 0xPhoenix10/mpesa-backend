import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MetaDataSumAggregate {

    @Field(() => Float, {nullable:true})
    maxBuyerOrderAmount?: number;
}
