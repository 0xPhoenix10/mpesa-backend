import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    vendorId?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    notes?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    affiliateId?: true;

    @Field(() => Boolean, {nullable:true})
    products?: true;

    @Field(() => Boolean, {nullable:true})
    items?: true;

    @Field(() => Boolean, {nullable:true})
    deliveryCode?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    paymentStatus?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    paymentMethod?: true;

    @Field(() => Boolean, {nullable:true})
    billingId?: true;

    @Field(() => Boolean, {nullable:true})
    shippingId?: true;

    @Field(() => Boolean, {nullable:true})
    ecommercePlatform?: true;

    @Field(() => Boolean, {nullable:true})
    currency?: true;

    @Field(() => Boolean, {nullable:true})
    platformId?: true;

    @Field(() => Boolean, {nullable:true})
    customerId?: true;

    @Field(() => Boolean, {nullable:true})
    referenceNumber?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
