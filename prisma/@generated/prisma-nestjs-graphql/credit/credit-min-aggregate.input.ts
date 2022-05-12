import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreditMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    typeId?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    orderId?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    debtorId?: true;

    @Field(() => Boolean, {nullable:true})
    creditorId?: true;

    @Field(() => Boolean, {nullable:true})
    installmentsCount?: true;

    @Field(() => Boolean, {nullable:true})
    installmentsCountPaid?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    totalPaid?: true;

    @Field(() => Boolean, {nullable:true})
    totalToPay?: true;

    @Field(() => Boolean, {nullable:true})
    agreedDate?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    referenceNumber?: true;

    @Field(() => Boolean, {nullable:true})
    creditConfigurationId?: true;

    @Field(() => Boolean, {nullable:true})
    endDate?: true;

    @Field(() => Boolean, {nullable:true})
    paidAt?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    durationSlices?: true;

    @Field(() => Boolean, {nullable:true})
    affiliateId?: true;

    @Field(() => Boolean, {nullable:true})
    defaultAt?: true;

    @Field(() => Boolean, {nullable:true})
    fundUpfrontAmount?: true;

    @Field(() => Boolean, {nullable:true})
    orderWalletId?: true;

    @Field(() => Boolean, {nullable:true})
    fundFeesAmount?: true;

    @Field(() => Boolean, {nullable:true})
    amountWithFees?: true;

    @Field(() => Boolean, {nullable:true})
    payNowAmount?: true;

    @Field(() => Boolean, {nullable:true})
    seviFeesAmount?: true;

    @Field(() => Boolean, {nullable:true})
    orderWalletShareFeesAmount?: true;

    @Field(() => Boolean, {nullable:true})
    fundPostDeliveryAmount?: true;

    @Field(() => Boolean, {nullable:true})
    payLaterAmount?: true;
}
