import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderStatusEnum } from '../prisma/order-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PaymentStatusEnum } from '../prisma/payment-status.enum';
import { Float } from '@nestjs/graphql';
import { OrderPaymentMethodsEnum } from '../prisma/order-payment-methods.enum';
import { EcommercePlatformEnum } from '../prisma/ecommerce-platform.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderAvgAggregate } from './order-avg-aggregate.output';
import { OrderSumAggregate } from './order-sum-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class OrderGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    vendorId?: string;

    @Field(() => OrderStatusEnum, {nullable:true})
    status?: keyof typeof OrderStatusEnum;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    affiliateId?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    products?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    items?: any;

    @Field(() => String, {nullable:true})
    deliveryCode?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => PaymentStatusEnum, {nullable:false})
    paymentStatus!: keyof typeof PaymentStatusEnum;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => OrderPaymentMethodsEnum, {nullable:true})
    paymentMethod?: keyof typeof OrderPaymentMethodsEnum;

    @Field(() => String, {nullable:true})
    billingId?: string;

    @Field(() => String, {nullable:true})
    shippingId?: string;

    @Field(() => EcommercePlatformEnum, {nullable:true})
    ecommercePlatform?: keyof typeof EcommercePlatformEnum;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => String, {nullable:true})
    platformId?: string;

    @Field(() => String, {nullable:true})
    customerId?: string;

    @Field(() => String, {nullable:true})
    referenceNumber?: string;

    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: OrderCountAggregate;

    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: OrderAvgAggregate;

    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: OrderSumAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: OrderMinAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: OrderMaxAggregate;
}
