import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ShippingTypeEnum } from '../prisma/shipping-type.enum';
import { Float } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';
import { Order } from '../order/order.model';
import { ShippingCount } from './shipping-count.output';

@ObjectType()
export class Shipping {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => String, {nullable:true})
    company!: string | null;

    @Field(() => String, {nullable:true})
    address1!: string | null;

    @Field(() => String, {nullable:true})
    address2!: string | null;

    @Field(() => String, {nullable:true})
    city!: string | null;

    @Field(() => String, {nullable:true})
    state!: string | null;

    @Field(() => String, {nullable:true})
    postcode!: string | null;

    @Field(() => String, {nullable:true})
    country!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    longitude!: string | null;

    @Field(() => ShippingTypeEnum, {nullable:true})
    shippingType!: keyof typeof ShippingTypeEnum | null;

    @Field(() => Float, {nullable:true})
    shippingFee!: number | null;

    @Field(() => String, {nullable:true})
    latitude!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => String, {nullable:true})
    walletId!: string | null;

    @Field(() => Boolean, {nullable:true})
    isDefault!: boolean | null;

    @Field(() => Boolean, {nullable:true})
    seviVerified!: boolean | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Wallet, {nullable:true})
    wallet?: Wallet | null;

    @Field(() => [Order], {nullable:true})
    Order?: Array<Order>;

    @Field(() => ShippingCount, {nullable:false})
    _count?: ShippingCount;
}
