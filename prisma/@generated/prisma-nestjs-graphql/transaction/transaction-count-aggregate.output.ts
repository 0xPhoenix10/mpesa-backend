import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TransactionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    fee!: number;

    @Field(() => Int, {nullable:false})
    totalAmount!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    paymentType!: number;

    @Field(() => Int, {nullable:false})
    paymentTypeId!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    transactionType!: number;

    @Field(() => Int, {nullable:false})
    method!: number;

    @Field(() => Int, {nullable:false})
    walletId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    balanceAfter!: number;

    @Field(() => Int, {nullable:false})
    balanceBefore!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
