import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    vendorId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    notes!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    phoneNumber!: number;

    @Field(() => Int, {nullable:false})
    affiliateId!: number;

    @Field(() => Int, {nullable:false})
    products!: number;

    @Field(() => Int, {nullable:false})
    items!: number;

    @Field(() => Int, {nullable:false})
    deliveryCode!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    paymentStatus!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    paymentMethod!: number;

    @Field(() => Int, {nullable:false})
    billingId!: number;

    @Field(() => Int, {nullable:false})
    shippingId!: number;

    @Field(() => Int, {nullable:false})
    ecommercePlatform!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    platformId!: number;

    @Field(() => Int, {nullable:false})
    customerId!: number;

    @Field(() => Int, {nullable:false})
    referenceNumber!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
