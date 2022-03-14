import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    userPhoto!: number;

    @Field(() => Int, {nullable:false})
    phoneNumber!: number;

    @Field(() => Int, {nullable:false})
    countryCode!: number;

    @Field(() => Int, {nullable:false})
    documentId!: number;

    @Field(() => Int, {nullable:false})
    url!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    pin!: number;

    @Field(() => Int, {nullable:false})
    deviceToken!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    verified!: number;

    @Field(() => Int, {nullable:false})
    expoPushToken!: number;

    @Field(() => Int, {nullable:false})
    inviterId!: number;

    @Field(() => Int, {nullable:false})
    faceIdImage!: number;

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
    _all!: number;
}
