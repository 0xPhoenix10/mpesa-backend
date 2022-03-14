import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderEnum } from '../prisma/gender.enum';
import { OtherMemberKYCCountAggregate } from './other-member-kyc-count-aggregate.output';
import { OtherMemberKYCMinAggregate } from './other-member-kyc-min-aggregate.output';
import { OtherMemberKYCMaxAggregate } from './other-member-kyc-max-aggregate.output';

@ObjectType()
export class OtherMemberKYCGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    createdByUserId!: string;

    @Field(() => String, {nullable:false})
    userIdToKYC!: string;

    @Field(() => String, {nullable:false})
    OTP!: string;

    @Field(() => OtherMemberKYCCountAggregate, {nullable:true})
    _count?: OtherMemberKYCCountAggregate;

    @Field(() => OtherMemberKYCMinAggregate, {nullable:true})
    _min?: OtherMemberKYCMinAggregate;

    @Field(() => OtherMemberKYCMaxAggregate, {nullable:true})
    _max?: OtherMemberKYCMaxAggregate;
}
