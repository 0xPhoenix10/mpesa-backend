import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InstallmentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    installmentCount!: number;

    @Field(() => Int, {nullable:false})
    startDate!: number;

    @Field(() => Int, {nullable:false})
    endDate!: number;

    @Field(() => Int, {nullable:false})
    referenceNumber!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    debtorId!: number;

    @Field(() => Int, {nullable:false})
    creditorId!: number;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    firstTryFailedAt!: number;

    @Field(() => Int, {nullable:false})
    creditId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    amountWithPenalty!: number;

    @Field(() => Int, {nullable:false})
    seviFees!: number;

    @Field(() => Int, {nullable:false})
    penalty!: number;

    @Field(() => Int, {nullable:false})
    paidAt!: number;

    @Field(() => Int, {nullable:false})
    creditConfigurationId!: number;

    @Field(() => Int, {nullable:false})
    affiliateFees!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
