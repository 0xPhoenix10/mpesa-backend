import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { OrderStatusEnum } from '../prisma/order-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PaymentStatusEnum } from '../prisma/payment-status.enum';
import { Float } from '@nestjs/graphql';
import { OrderPaymentMethodsEnum } from '../prisma/order-payment-methods.enum';
import { EcommercePlatformEnum } from '../prisma/ecommerce-platform.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { User } from '../user/user.model';
import { Billing } from '../billing/billing.model';
import { Wallet } from '../wallet/wallet.model';
import { Shipping } from '../shipping/shipping.model';
import { Credit } from '../credit/credit.model';
import { Installment } from '../installment/installment.model';
import { CreditRequest } from '../credit-request/credit-request.model';
import { OrderCount } from './order-count.output';

@ObjectType()
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:true})
    vendorId!: string | null;

    @Field(() => OrderStatusEnum, {nullable:true})
    status!: keyof typeof OrderStatusEnum | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => String, {nullable:true})
    affiliateId!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    products!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    items!: any | null;

    @Field(() => String, {nullable:true})
    deliveryCode!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => PaymentStatusEnum, {nullable:false,defaultValue:'PENDING'})
    paymentStatus!: keyof typeof PaymentStatusEnum;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => OrderPaymentMethodsEnum, {nullable:true})
    paymentMethod!: keyof typeof OrderPaymentMethodsEnum | null;

    @Field(() => String, {nullable:true})
    billingId!: string | null;

    @Field(() => String, {nullable:true})
    shippingId!: string | null;

    @Field(() => EcommercePlatformEnum, {nullable:true})
    ecommercePlatform!: keyof typeof EcommercePlatformEnum | null;

    @Field(() => CurrencyEnum, {nullable:true})
    currency!: keyof typeof CurrencyEnum | null;

    @Field(() => String, {nullable:true})
    platformId!: string | null;

    @Field(() => String, {nullable:true})
    customerId!: string | null;

    @Field(() => String, {nullable:true})
    referenceNumber!: string | null;

    @Field(() => User, {nullable:true})
    affiliate?: User | null;

    @Field(() => Billing, {nullable:true})
    billing?: Billing | null;

    @Field(() => Wallet, {nullable:true})
    customer?: Wallet | null;

    @Field(() => Shipping, {nullable:true})
    shipping?: Shipping | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Wallet, {nullable:true})
    vendorWallet?: Wallet | null;

    @Field(() => Credit, {nullable:true})
    credit?: Credit | null;

    @Field(() => [Installment], {nullable:true})
    installments?: Array<Installment>;

    @Field(() => CreditRequest, {nullable:true})
    creditRequest?: CreditRequest | null;

    @Field(() => OrderCount, {nullable:false})
    _count?: OrderCount;
}
