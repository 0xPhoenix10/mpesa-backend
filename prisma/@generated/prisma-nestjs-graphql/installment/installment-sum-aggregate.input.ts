import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InstallmentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    installmentCount?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    paidAmount?: true;

    @Field(() => Boolean, {nullable:true})
    amountWithPenalty?: true;

    @Field(() => Boolean, {nullable:true})
    seviFees?: true;

    @Field(() => Boolean, {nullable:true})
    penalty?: true;

    @Field(() => Boolean, {nullable:true})
    affiliateFees?: true;
}
