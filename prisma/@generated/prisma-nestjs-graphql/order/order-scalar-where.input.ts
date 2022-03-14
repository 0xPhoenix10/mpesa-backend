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

@InputType()
export class OrderScalarWhereInput {

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    AND?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    OR?: Array<OrderScalarWhereInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    NOT?: Array<OrderScalarWhereInput>;

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
}
