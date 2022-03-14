import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumCountryCodeNullableWithAggregatesFilter } from '../prisma/enum-country-code-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumGenderEnumNullableWithAggregatesFilter } from '../prisma/enum-gender-enum-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class OtherMemberKYCScalarWhereWithAggregatesInput {

    @Field(() => [OtherMemberKYCScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OtherMemberKYCScalarWhereWithAggregatesInput>;

    @Field(() => [OtherMemberKYCScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OtherMemberKYCScalarWhereWithAggregatesInput>;

    @Field(() => [OtherMemberKYCScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OtherMemberKYCScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    documentId?: StringWithAggregatesFilter;

    @Field(() => EnumCountryCodeNullableWithAggregatesFilter, {nullable:true})
    documentCountry?: EnumCountryCodeNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    documentData?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentFirstName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentLastName?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentImage?: StringNullableWithAggregatesFilter;

    @Field(() => EnumGenderEnumNullableWithAggregatesFilter, {nullable:true})
    documentGender?: EnumGenderEnumNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    documentDateOfBirth?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    documentDateOfIssue?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentSerialNumber?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    documentCreatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    profilePictureURL?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    idCardURL?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    createdByUserId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userIdToKYC?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    OTP?: StringWithAggregatesFilter;
}
