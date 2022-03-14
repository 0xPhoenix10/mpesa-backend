import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreditConfigurationCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    shouldPayDeposit?: true;

    @Field(() => Boolean, {nullable:true})
    depositPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    slices?: true;

    @Field(() => Boolean, {nullable:true})
    seviFeesPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    daysToStartAfterDelivery?: true;

    @Field(() => Boolean, {nullable:true})
    lateInstallmentFeesPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    affiliatePercentage?: true;

    @Field(() => Boolean, {nullable:true})
    creditLateFeesPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    creditLateDays?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    numberOfAllowedCredits?: true;

    @Field(() => Boolean, {nullable:true})
    fundFeesPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    fundId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
