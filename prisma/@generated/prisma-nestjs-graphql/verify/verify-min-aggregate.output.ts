import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { OrderPaymentMethodsEnum } from '../prisma/order-payment-methods.enum';

@ObjectType()
export class VerifyMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    UID?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => CountryCode, {nullable:true})
    countryCode?: keyof typeof CountryCode;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    creditConfigId?: string;

    @Field(() => String, {nullable:true})
    OTP?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => OrderPaymentMethodsEnum, {nullable:true})
    orderPaymentMethod?: keyof typeof OrderPaymentMethodsEnum;
}
