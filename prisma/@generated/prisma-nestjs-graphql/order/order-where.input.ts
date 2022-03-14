import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumOrderStatusEnumNullableFilter } from '../prisma/enum-order-status-enum-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumPaymentStatusEnumFilter } from '../prisma/enum-payment-status-enum-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumOrderPaymentMethodsEnumNullableFilter } from '../prisma/enum-order-payment-methods-enum-nullable-filter.input';
import { EnumEcommercePlatformEnumNullableFilter } from '../prisma/enum-ecommerce-platform-enum-nullable-filter.input';
import { EnumCurrencyEnumNullableFilter } from '../prisma/enum-currency-enum-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { BillingRelationFilter } from '../billing/billing-relation-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { ShippingRelationFilter } from '../shipping/shipping-relation-filter.input';
import { CreditRelationFilter } from '../credit/credit-relation-filter.input';
import { InstallmentListRelationFilter } from '../installment/installment-list-relation-filter.input';
import { CreditRequestRelationFilter } from '../credit-request/credit-request-relation-filter.input';

@InputType()
export class OrderWhereInput {

    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    vendorId?: StringNullableFilter;

    @Field(() => EnumOrderStatusEnumNullableFilter, {nullable:true})
    status?: EnumOrderStatusEnumNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    affiliateId?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    products?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    items?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deliveryCode?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => EnumPaymentStatusEnumFilter, {nullable:true})
    paymentStatus?: EnumPaymentStatusEnumFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => EnumOrderPaymentMethodsEnumNullableFilter, {nullable:true})
    paymentMethod?: EnumOrderPaymentMethodsEnumNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    billingId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shippingId?: StringNullableFilter;

    @Field(() => EnumEcommercePlatformEnumNullableFilter, {nullable:true})
    ecommercePlatform?: EnumEcommercePlatformEnumNullableFilter;

    @Field(() => EnumCurrencyEnumNullableFilter, {nullable:true})
    currency?: EnumCurrencyEnumNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    platformId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    customerId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referenceNumber?: StringNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    affiliate?: UserRelationFilter;

    @Field(() => BillingRelationFilter, {nullable:true})
    billing?: BillingRelationFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    customer?: WalletRelationFilter;

    @Field(() => ShippingRelationFilter, {nullable:true})
    shipping?: ShippingRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    vendorWallet?: WalletRelationFilter;

    @Field(() => CreditRelationFilter, {nullable:true})
    credit?: CreditRelationFilter;

    @Field(() => InstallmentListRelationFilter, {nullable:true})
    installments?: InstallmentListRelationFilter;

    @Field(() => CreditRequestRelationFilter, {nullable:true})
    creditRequest?: CreditRequestRelationFilter;
}
