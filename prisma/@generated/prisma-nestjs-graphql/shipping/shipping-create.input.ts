import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingTypeEnum } from '../prisma/shipping-type.enum';
import { Float } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutShippingInput } from '../wallet/wallet-create-nested-one-without-shipping.input';
import { OrderCreateNestedManyWithoutShippingInput } from '../order/order-create-nested-many-without-shipping.input';

@InputType()
export class ShippingCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => String, {nullable:true})
    address1?: string;

    @Field(() => String, {nullable:true})
    address2?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    postcode?: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    longitude?: string;

    @Field(() => ShippingTypeEnum, {nullable:true})
    shippingType?: keyof typeof ShippingTypeEnum;

    @Field(() => Float, {nullable:true})
    shippingFee?: number;

    @Field(() => String, {nullable:true})
    latitude?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Boolean, {nullable:true})
    isDefault?: boolean;

    @Field(() => Boolean, {nullable:true})
    seviVerified?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => WalletCreateNestedOneWithoutShippingInput, {nullable:true})
    wallet?: WalletCreateNestedOneWithoutShippingInput;

    @Field(() => OrderCreateNestedManyWithoutShippingInput, {nullable:true})
    Order?: OrderCreateNestedManyWithoutShippingInput;
}
