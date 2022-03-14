import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CreditConfigurationsWalletsAvgAggregate {

    @Field(() => Float, {nullable:true})
    upfrontPercentage?: number;

    @Field(() => Float, {nullable:true})
    fundFeesPercentage?: number;

    @Field(() => Float, {nullable:true})
    maxOrderAmount?: number;

    @Field(() => Float, {nullable:true})
    maxOutstandingCredit?: number;

    @Field(() => Float, {nullable:true})
    shareFeesPercentage?: number;

    @Field(() => Float, {nullable:true})
    postDeliveryPercentage?: number;
}
