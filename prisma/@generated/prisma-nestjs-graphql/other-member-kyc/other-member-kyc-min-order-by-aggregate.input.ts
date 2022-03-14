import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OtherMemberKYCMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentId?: keyof typeof SortOrder;

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

    @Field(() => SortOrder, {nullable:true})
    profilePictureURL?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    idCardURL?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdByUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userIdToKYC?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    OTP?: keyof typeof SortOrder;
}
