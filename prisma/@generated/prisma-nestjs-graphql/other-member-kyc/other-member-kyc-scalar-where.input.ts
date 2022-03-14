import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCountryCodeNullableFilter } from '../prisma/enum-country-code-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumGenderEnumNullableFilter } from '../prisma/enum-gender-enum-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OtherMemberKYCScalarWhereInput {

    @Field(() => [OtherMemberKYCScalarWhereInput], {nullable:true})
    AND?: Array<OtherMemberKYCScalarWhereInput>;

    @Field(() => [OtherMemberKYCScalarWhereInput], {nullable:true})
    OR?: Array<OtherMemberKYCScalarWhereInput>;

    @Field(() => [OtherMemberKYCScalarWhereInput], {nullable:true})
    NOT?: Array<OtherMemberKYCScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    documentId?: StringFilter;

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

    @Field(() => StringFilter, {nullable:true})
    profilePictureURL?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    idCardURL?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    createdByUserId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userIdToKYC?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    OTP?: StringFilter;
}
