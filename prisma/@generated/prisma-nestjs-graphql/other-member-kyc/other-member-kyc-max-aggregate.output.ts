import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GenderEnum } from '../prisma/gender.enum';

@ObjectType()
export class OtherMemberKYCMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    documentId?: string;

    @Field(() => CountryCode, {nullable:true})
    documentCountry?: keyof typeof CountryCode;

    @Field(() => String, {nullable:true})
    documentFirstName?: string;

    @Field(() => String, {nullable:true})
    documentLastName?: string;

    @Field(() => String, {nullable:true})
    documentImage?: string;

    @Field(() => GenderEnum, {nullable:true})
    documentGender?: keyof typeof GenderEnum;

    @Field(() => Date, {nullable:true})
    documentDateOfBirth?: Date | string;

    @Field(() => Date, {nullable:true})
    documentDateOfIssue?: Date | string;

    @Field(() => String, {nullable:true})
    documentSerialNumber?: string;

    @Field(() => Date, {nullable:true})
    documentCreatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    profilePictureURL?: string;

    @Field(() => String, {nullable:true})
    idCardURL?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdByUserId?: string;

    @Field(() => String, {nullable:true})
    userIdToKYC?: string;

    @Field(() => String, {nullable:true})
    OTP?: string;
}
