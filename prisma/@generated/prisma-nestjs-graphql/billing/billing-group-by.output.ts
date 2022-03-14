import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BillingCountAggregate } from './billing-count-aggregate.output';
import { BillingMinAggregate } from './billing-min-aggregate.output';
import { BillingMaxAggregate } from './billing-max-aggregate.output';

@ObjectType()
export class BillingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => String, {nullable:true})
    address1?: string;

    @Field(() => String, {nullable:true})
    address2?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    postcode?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    walletId?: string;

    @Field(() => BillingCountAggregate, {nullable:true})
    _count?: BillingCountAggregate;

    @Field(() => BillingMinAggregate, {nullable:true})
    _min?: BillingMinAggregate;

    @Field(() => BillingMaxAggregate, {nullable:true})
    _max?: BillingMaxAggregate;
}
