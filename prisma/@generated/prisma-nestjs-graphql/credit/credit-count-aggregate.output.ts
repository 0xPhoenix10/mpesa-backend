import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CreditCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    typeId!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    debtorId!: number;

    @Field(() => Int, {nullable:false})
    creditorId!: number;

    @Field(() => Int, {nullable:false})
    installmentsCount!: number;

    @Field(() => Int, {nullable:false})
    installmentsCountPaid!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    totalPaid!: number;

    @Field(() => Int, {nullable:false})
    totalToPay!: number;

    @Field(() => Int, {nullable:false})
    agreedDate!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    referenceNumber!: number;

    @Field(() => Int, {nullable:false})
    creditConfigurationId!: number;

    @Field(() => Int, {nullable:false})
    endDate!: number;

    @Field(() => Int, {nullable:false})
    paidAt!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    durationSlices!: number;

    @Field(() => Int, {nullable:false})
    affiliateId!: number;

    @Field(() => Int, {nullable:false})
    defaultAt!: number;

    @Field(() => Int, {nullable:false})
    fundUpfrontAmount!: number;

    @Field(() => Int, {nullable:false})
    orderWalletId!: number;

    @Field(() => Int, {nullable:false})
    fundFeesAmount!: number;

    @Field(() => Int, {nullable:false})
    amountWithFees!: number;

    @Field(() => Int, {nullable:false})
    seviFeesAmount!: number;

    @Field(() => Int, {nullable:false})
    orderWalletShareFeesAmount!: number;

    @Field(() => Int, {nullable:false})
    fundPostDeliveryAmount!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
