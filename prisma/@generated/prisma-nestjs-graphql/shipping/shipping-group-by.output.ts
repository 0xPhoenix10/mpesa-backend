import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShippingTypeEnum } from '../prisma/shipping-type.enum';
import { Float } from '@nestjs/graphql';
import { ShippingCountAggregate } from './shipping-count-aggregate.output';
import { ShippingAvgAggregate } from './shipping-avg-aggregate.output';
import { ShippingSumAggregate } from './shipping-sum-aggregate.output';
import { ShippingMinAggregate } from './shipping-min-aggregate.output';
import { ShippingMaxAggregate } from './shipping-max-aggregate.output';

@ObjectType()
export class ShippingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => String, {nullable:true})
    walletId?: string;

    @Field(() => Boolean, {nullable:true})
    isDefault?: boolean;

    @Field(() => Boolean, {nullable:true})
    seviVerified?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ShippingCountAggregate, {nullable:true})
    _count?: ShippingCountAggregate;

    @Field(() => ShippingAvgAggregate, {nullable:true})
    _avg?: ShippingAvgAggregate;

    @Field(() => ShippingSumAggregate, {nullable:true})
    _sum?: ShippingSumAggregate;

    @Field(() => ShippingMinAggregate, {nullable:true})
    _min?: ShippingMinAggregate;

    @Field(() => ShippingMaxAggregate, {nullable:true})
    _max?: ShippingMaxAggregate;
}
