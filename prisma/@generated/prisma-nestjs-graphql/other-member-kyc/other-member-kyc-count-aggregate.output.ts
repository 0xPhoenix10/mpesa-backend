import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OtherMemberKYCCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    documentId!: number;

    @Field(() => Int, {nullable:false})
    documentCountry!: number;

    @Field(() => Int, {nullable:false})
    documentData!: number;

    @Field(() => Int, {nullable:false})
    documentFirstName!: number;

    @Field(() => Int, {nullable:false})
    documentLastName!: number;

    @Field(() => Int, {nullable:false})
    documentImage!: number;

    @Field(() => Int, {nullable:false})
    documentGender!: number;

    @Field(() => Int, {nullable:false})
    documentDateOfBirth!: number;

    @Field(() => Int, {nullable:false})
    documentDateOfIssue!: number;

    @Field(() => Int, {nullable:false})
    documentSerialNumber!: number;

    @Field(() => Int, {nullable:false})
    documentCreatedAt!: number;

    @Field(() => Int, {nullable:false})
    profilePictureURL!: number;

    @Field(() => Int, {nullable:false})
    idCardURL!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    createdByUserId!: number;

    @Field(() => Int, {nullable:false})
    userIdToKYC!: number;

    @Field(() => Int, {nullable:false})
    OTP!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
