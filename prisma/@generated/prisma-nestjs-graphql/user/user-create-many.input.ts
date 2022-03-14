import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderEnum } from '../prisma/gender.enum';

@InputType()
export class UserCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    userPhoto?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => CountryCode, {nullable:true})
    countryCode?: keyof typeof CountryCode;

    @Field(() => String, {nullable:true})
    documentId?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    pin?: string;

    @Field(() => String, {nullable:true})
    deviceToken?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => String, {nullable:true})
    expoPushToken?: string;

    @Field(() => String, {nullable:true})
    inviterId?: string;

    @Field(() => String, {nullable:true})
    faceIdImage?: string;

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
}
