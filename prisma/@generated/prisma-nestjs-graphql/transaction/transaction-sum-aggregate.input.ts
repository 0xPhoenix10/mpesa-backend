import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TransactionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    fee?: true;

    @Field(() => Boolean, {nullable:true})
    totalAmount?: true;

    @Field(() => Boolean, {nullable:true})
    balanceAfter?: true;

    @Field(() => Boolean, {nullable:true})
    balanceBefore?: true;
}
