import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InstallmentMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    installmentCount?: true;

    @Field(() => Boolean, {nullable:true})
    startDate?: true;

    @Field(() => Boolean, {nullable:true})
    endDate?: true;

    @Field(() => Boolean, {nullable:true})
    referenceNumber?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    paidAmount?: true;

    @Field(() => Boolean, {nullable:true})
    debtorId?: true;

    @Field(() => Boolean, {nullable:true})
    creditorId?: true;

    @Field(() => Boolean, {nullable:true})
    orderId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    firstTryFailedAt?: true;

    @Field(() => Boolean, {nullable:true})
    creditId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    amountWithPenalty?: true;

    @Field(() => Boolean, {nullable:true})
    seviFees?: true;

    @Field(() => Boolean, {nullable:true})
    penalty?: true;

    @Field(() => Boolean, {nullable:true})
    paidAt?: true;

    @Field(() => Boolean, {nullable:true})
    creditConfigurationId?: true;

    @Field(() => Boolean, {nullable:true})
    affiliateFees?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;
}
