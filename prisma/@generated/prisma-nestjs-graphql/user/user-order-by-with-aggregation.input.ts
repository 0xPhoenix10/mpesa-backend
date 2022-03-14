import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserCountOrderByAggregateInput } from './user-count-order-by-aggregate.input';
import { UserMaxOrderByAggregateInput } from './user-max-order-by-aggregate.input';
import { UserMinOrderByAggregateInput } from './user-min-order-by-aggregate.input';

@InputType()
export class UserOrderByWithAggregationInput {

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
    documentData?: keyof typeof SortOrder;

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

    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: UserCountOrderByAggregateInput;

    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: UserMaxOrderByAggregateInput;

    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: UserMinOrderByAggregateInput;
}
