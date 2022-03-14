import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShippingMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    firstName?: true;

    @Field(() => Boolean, {nullable:true})
    lastName?: true;

    @Field(() => Boolean, {nullable:true})
    company?: true;

    @Field(() => Boolean, {nullable:true})
    address1?: true;

    @Field(() => Boolean, {nullable:true})
    address2?: true;

    @Field(() => Boolean, {nullable:true})
    city?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    postcode?: true;

    @Field(() => Boolean, {nullable:true})
    country?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    longitude?: true;

    @Field(() => Boolean, {nullable:true})
    shippingType?: true;

    @Field(() => Boolean, {nullable:true})
    shippingFee?: true;

    @Field(() => Boolean, {nullable:true})
    latitude?: true;

    @Field(() => Boolean, {nullable:true})
    phoneNumber?: true;

    @Field(() => Boolean, {nullable:true})
    walletId?: true;

    @Field(() => Boolean, {nullable:true})
    isDefault?: true;

    @Field(() => Boolean, {nullable:true})
    seviVerified?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
