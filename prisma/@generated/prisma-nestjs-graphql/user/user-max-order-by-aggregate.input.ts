import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userPhoto?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expoPushToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inviterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    faceIdImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentCountry?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentFirstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentLastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentImage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentGender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentDateOfBirth?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentDateOfIssue?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentSerialNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentCreatedAt?: keyof typeof SortOrder;
}
