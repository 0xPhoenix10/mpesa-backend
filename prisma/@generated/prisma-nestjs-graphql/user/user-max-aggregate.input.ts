import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    userPhoto?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    countryCode?: true;

    @Field(() => Boolean, {nullable:true})
    documentId?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    pin?: true;

    @Field(() => Boolean, {nullable:true})
    deviceToken?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    verified?: true;

    @Field(() => Boolean, {nullable:true})
    expoPushToken?: true;

    @Field(() => Boolean, {nullable:true})
    inviterId?: true;

    @Field(() => Boolean, {nullable:true})
    faceIdImage?: true;

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
}
