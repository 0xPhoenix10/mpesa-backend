import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreditConfigurationsWalletsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    upfrontPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    fundFeesPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    maxOrderAmount?: true;

    @Field(() => Boolean, {nullable:true})
    maxOutstandingCredit?: true;

    @Field(() => Boolean, {nullable:true})
    shareFeesPercentage?: true;

    @Field(() => Boolean, {nullable:true})
    postDeliveryPercentage?: true;
}
