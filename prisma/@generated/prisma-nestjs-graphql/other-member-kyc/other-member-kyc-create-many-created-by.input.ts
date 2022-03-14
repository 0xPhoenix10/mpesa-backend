import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderEnum } from '../prisma/gender.enum';

@InputType()
export class OtherMemberKYCCreateManyCreatedByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    documentId!: string;

    @Field(() => CountryCode, {nullable:true})
    documentCountry?: keyof typeof CountryCode;

    @Field(() => GraphQLJSON, {nullable:true})
    documentData?: any;

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

    @Field(() => String, {nullable:false})
    profilePictureURL!: string;

    @Field(() => String, {nullable:false})
    idCardURL!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    userIdToKYC!: string;

    @Field(() => String, {nullable:false})
    OTP!: string;
}
