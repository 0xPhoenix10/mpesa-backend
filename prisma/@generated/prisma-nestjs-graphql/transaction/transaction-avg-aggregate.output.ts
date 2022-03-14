import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TransactionAvgAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    fee?: number;

    @Field(() => Float, {nullable:true})
    totalAmount?: number;

    @Field(() => Float, {nullable:true})
    balanceAfter?: number;

    @Field(() => Float, {nullable:true})
    balanceBefore?: number;
}
