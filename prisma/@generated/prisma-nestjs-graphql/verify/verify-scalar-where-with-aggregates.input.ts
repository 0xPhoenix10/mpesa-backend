import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumCountryCodeNullableWithAggregatesFilter } from '../prisma/enum-country-code-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumOrderPaymentMethodsEnumNullableWithAggregatesFilter } from '../prisma/enum-order-payment-methods-enum-nullable-with-aggregates-filter.input';

@InputType()
export class VerifyScalarWhereWithAggregatesInput {

    @Field(() => [VerifyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VerifyScalarWhereWithAggregatesInput>;

    @Field(() => [VerifyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VerifyScalarWhereWithAggregatesInput>;

    @Field(() => [VerifyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VerifyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    UID?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringNullableWithAggregatesFilter;

    @Field(() => EnumCountryCodeNullableWithAggregatesFilter, {nullable:true})
    countryCode?: EnumCountryCodeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    creditConfigId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    OTP?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    email?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumOrderPaymentMethodsEnumNullableWithAggregatesFilter, {nullable:true})
    orderPaymentMethod?: EnumOrderPaymentMethodsEnumNullableWithAggregatesFilter;
}
