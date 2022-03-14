import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCountryCodeNullableFilter } from '../prisma/enum-country-code-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumOrderPaymentMethodsEnumNullableFilter } from '../prisma/enum-order-payment-methods-enum-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class VerifyWhereInput {

    @Field(() => [VerifyWhereInput], {nullable:true})
    AND?: Array<VerifyWhereInput>;

    @Field(() => [VerifyWhereInput], {nullable:true})
    OR?: Array<VerifyWhereInput>;

    @Field(() => [VerifyWhereInput], {nullable:true})
    NOT?: Array<VerifyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    UID?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => EnumCountryCodeNullableFilter, {nullable:true})
    countryCode?: EnumCountryCodeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    creditConfigId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    OTP?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => EnumOrderPaymentMethodsEnumNullableFilter, {nullable:true})
    orderPaymentMethod?: EnumOrderPaymentMethodsEnumNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
