import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumOrderStatusEnumNullableWithAggregatesFilter } from '../prisma/enum-order-status-enum-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumPaymentStatusEnumWithAggregatesFilter } from '../prisma/enum-payment-status-enum-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumOrderPaymentMethodsEnumNullableWithAggregatesFilter } from '../prisma/enum-order-payment-methods-enum-nullable-with-aggregates-filter.input';
import { EnumEcommercePlatformEnumNullableWithAggregatesFilter } from '../prisma/enum-ecommerce-platform-enum-nullable-with-aggregates-filter.input';
import { EnumCurrencyEnumNullableWithAggregatesFilter } from '../prisma/enum-currency-enum-nullable-with-aggregates-filter.input';

@InputType()
export class OrderScalarWhereWithAggregatesInput {

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => [OrderScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OrderScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    vendorId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumOrderStatusEnumNullableWithAggregatesFilter, {nullable:true})
    status?: EnumOrderStatusEnumNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    notes?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    affiliateId?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    products?: JsonNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    items?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    deliveryCode?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumPaymentStatusEnumWithAggregatesFilter, {nullable:true})
    paymentStatus?: EnumPaymentStatusEnumWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => EnumOrderPaymentMethodsEnumNullableWithAggregatesFilter, {nullable:true})
    paymentMethod?: EnumOrderPaymentMethodsEnumNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    billingId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    shippingId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumEcommercePlatformEnumNullableWithAggregatesFilter, {nullable:true})
    ecommercePlatform?: EnumEcommercePlatformEnumNullableWithAggregatesFilter;

    @Field(() => EnumCurrencyEnumNullableWithAggregatesFilter, {nullable:true})
    currency?: EnumCurrencyEnumNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    platformId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    customerId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    referenceNumber?: StringNullableWithAggregatesFilter;
}
