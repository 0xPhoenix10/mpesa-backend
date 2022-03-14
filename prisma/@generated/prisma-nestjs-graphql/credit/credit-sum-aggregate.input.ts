import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreditSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    installmentsCount?: true;

    @Field(() => Boolean, {nullable:true})
    installmentsCountPaid?: true;

    @Field(() => Boolean, {nullable:true})
    totalPaid?: true;

    @Field(() => Boolean, {nullable:true})
    totalToPay?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    fundUpfrontAmount?: true;

    @Field(() => Boolean, {nullable:true})
    fundFeesAmount?: true;

    @Field(() => Boolean, {nullable:true})
    amountWithFees?: true;

    @Field(() => Boolean, {nullable:true})
    seviFeesAmount?: true;

    @Field(() => Boolean, {nullable:true})
    orderWalletShareFeesAmount?: true;

    @Field(() => Boolean, {nullable:true})
    fundPostDeliveryAmount?: true;
}
