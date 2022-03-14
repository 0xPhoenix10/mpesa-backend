import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderEnum } from '../prisma/gender.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    verified!: boolean;

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

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
