import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SettlementMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    account?: true;

    @Field(() => Boolean, {nullable:true})
    bankAccount?: true;

    @Field(() => Boolean, {nullable:true})
    bankAccountName?: true;

    @Field(() => Boolean, {nullable:true})
    bankBranch?: true;

    @Field(() => Boolean, {nullable:true})
    bankName?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    verified?: true;

    @Field(() => Boolean, {nullable:true})
    verifiedByUser?: true;

    @Field(() => Boolean, {nullable:true})
    paybill?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdBy?: true;

    @Field(() => Boolean, {nullable:true})
    createdByAgent?: true;
}
