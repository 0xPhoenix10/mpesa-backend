import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreditConfigurationAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    depositPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

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
    numberOfAllowedCredits?: true;

    @Field(() => Boolean, {nullable:true})
    fundFeesPercentage?: true;
}
