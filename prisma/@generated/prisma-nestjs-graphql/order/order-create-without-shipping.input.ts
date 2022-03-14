import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatusEnum } from '../prisma/order-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PaymentStatusEnum } from '../prisma/payment-status.enum';
import { Float } from '@nestjs/graphql';
import { OrderPaymentMethodsEnum } from '../prisma/order-payment-methods.enum';
import { EcommercePlatformEnum } from '../prisma/ecommerce-platform.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { UserCreateNestedOneWithoutOrdersAffiliateInput } from '../user/user-create-nested-one-without-orders-affiliate.input';
import { BillingCreateNestedOneWithoutOrderInput } from '../billing/billing-create-nested-one-without-order.input';
import { WalletCreateNestedOneWithoutOrderInput } from '../wallet/wallet-create-nested-one-without-order.input';
import { UserCreateNestedOneWithoutOrdersInput } from '../user/user-create-nested-one-without-orders.input';
import { WalletCreateNestedOneWithoutOrdersInput } from '../wallet/wallet-create-nested-one-without-orders.input';
import { CreditCreateNestedOneWithoutOrderInput } from '../credit/credit-create-nested-one-without-order.input';
import { InstallmentCreateNestedManyWithoutOrderInput } from '../installment/installment-create-nested-many-without-order.input';
import { CreditRequestCreateNestedOneWithoutOrderInput } from '../credit-request/credit-request-create-nested-one-without-order.input';

@InputType()
export class OrderCreateWithoutShippingInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => OrderStatusEnum, {nullable:true})
    status?: keyof typeof OrderStatusEnum;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

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

    @Field(() => EcommercePlatformEnum, {nullable:true})
    ecommercePlatform?: keyof typeof EcommercePlatformEnum;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => String, {nullable:true})
    platformId?: string;

    @Field(() => String, {nullable:true})
    referenceNumber?: string;

    @Field(() => UserCreateNestedOneWithoutOrdersAffiliateInput, {nullable:true})
    affiliate?: UserCreateNestedOneWithoutOrdersAffiliateInput;

    @Field(() => BillingCreateNestedOneWithoutOrderInput, {nullable:true})
    billing?: BillingCreateNestedOneWithoutOrderInput;

    @Field(() => WalletCreateNestedOneWithoutOrderInput, {nullable:true})
    customer?: WalletCreateNestedOneWithoutOrderInput;

    @Field(() => UserCreateNestedOneWithoutOrdersInput, {nullable:true})
    user?: UserCreateNestedOneWithoutOrdersInput;

    @Field(() => WalletCreateNestedOneWithoutOrdersInput, {nullable:true})
    vendorWallet?: WalletCreateNestedOneWithoutOrdersInput;

    @Field(() => CreditCreateNestedOneWithoutOrderInput, {nullable:true})
    credit?: CreditCreateNestedOneWithoutOrderInput;

    @Field(() => InstallmentCreateNestedManyWithoutOrderInput, {nullable:true})
    installments?: InstallmentCreateNestedManyWithoutOrderInput;

    @Field(() => CreditRequestCreateNestedOneWithoutOrderInput, {nullable:true})
    creditRequest?: CreditRequestCreateNestedOneWithoutOrderInput;
}
