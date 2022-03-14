import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderEnum } from '../prisma/gender.enum';
import { User } from '../user/user.model';

@ObjectType()
export class OtherMemberKYC {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    documentId!: string;

    @Field(() => CountryCode, {nullable:true})
    documentCountry!: keyof typeof CountryCode | null;

    @Field(() => GraphQLJSON, {nullable:true})
    documentData!: any | null;

    @Field(() => String, {nullable:true})
    documentFirstName!: string | null;

    @Field(() => String, {nullable:true})
    documentLastName!: string | null;

    @Field(() => String, {nullable:true})
    documentImage!: string | null;

    @Field(() => GenderEnum, {nullable:true})
    documentGender!: keyof typeof GenderEnum | null;

    @Field(() => Date, {nullable:true})
    documentDateOfBirth!: Date | null;

    @Field(() => Date, {nullable:true})
    documentDateOfIssue!: Date | null;

    @Field(() => String, {nullable:true})
    documentSerialNumber!: string | null;

    @Field(() => Date, {nullable:true})
    documentCreatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    profilePictureURL!: string;

    @Field(() => String, {nullable:false})
    idCardURL!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    createdByUserId!: string;

    @Field(() => String, {nullable:false})
    userIdToKYC!: string;

    @Field(() => String, {nullable:false})
    OTP!: string;

    @Field(() => User, {nullable:false})
    createdBy?: User;
}
