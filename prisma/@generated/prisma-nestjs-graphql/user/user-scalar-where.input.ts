import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCountryCodeNullableFilter } from '../prisma/enum-country-code-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumGenderEnumNullableFilter } from '../prisma/enum-gender-enum-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {

    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userPhoto?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => EnumCountryCodeNullableFilter, {nullable:true})
    countryCode?: EnumCountryCodeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pin?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deviceToken?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    verified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    expoPushToken?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    inviterId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    faceIdImage?: StringNullableFilter;

    @Field(() => EnumCountryCodeNullableFilter, {nullable:true})
    documentCountry?: EnumCountryCodeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    documentData?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentFirstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentLastName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentImage?: StringNullableFilter;

    @Field(() => EnumGenderEnumNullableFilter, {nullable:true})
    documentGender?: EnumGenderEnumNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    documentDateOfBirth?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    documentDateOfIssue?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentSerialNumber?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    documentCreatedAt?: DateTimeNullableFilter;
}
