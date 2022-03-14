import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OtherMemberKYCMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    documentId?: true;

    @Field(() => Boolean, {nullable:true})
    documentCountry?: true;

    @Field(() => Boolean, {nullable:true})
    documentFirstName?: true;

    @Field(() => Boolean, {nullable:true})
    documentLastName?: true;

    @Field(() => Boolean, {nullable:true})
    documentImage?: true;

    @Field(() => Boolean, {nullable:true})
    documentGender?: true;

    @Field(() => Boolean, {nullable:true})
    documentDateOfBirth?: true;

    @Field(() => Boolean, {nullable:true})
    documentDateOfIssue?: true;

    @Field(() => Boolean, {nullable:true})
    documentSerialNumber?: true;

    @Field(() => Boolean, {nullable:true})
    documentCreatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    profilePictureURL?: true;

    @Field(() => Boolean, {nullable:true})
    idCardURL?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    createdByUserId?: true;

    @Field(() => Boolean, {nullable:true})
    userIdToKYC?: true;

    @Field(() => Boolean, {nullable:true})
    OTP?: true;
}
