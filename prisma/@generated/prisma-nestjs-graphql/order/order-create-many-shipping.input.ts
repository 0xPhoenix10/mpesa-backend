import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatusEnum } from '../prisma/order-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PaymentStatusEnum } from '../prisma/payment-status.enum';
import { Float } from '@nestjs/graphql';
import { OrderPaymentMethodsEnum } from '../prisma/order-payment-methods.enum';
import { EcommercePlatformEnum } from '../prisma/ecommerce-platform.enum';
import { CurrencyEnum } from '../prisma/currency.enum';

@InputType()
export class OrderCreateManyShippingInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PaymentStatusEnum, {nullable:true})
    paymentStatus?: keyof typeof PaymentStatusEnum;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => OrderPaymentMethodsEnum, {nullable:true})
    paymentMethod?: keyof typeof OrderPaymentMethodsEnum;

    @Field(() => String, {nullable:true})
    billingId?: string;

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
}
