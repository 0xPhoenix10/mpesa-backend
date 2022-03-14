import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { OrderPaymentMethodsEnum } from '../prisma/order-payment-methods.enum';
import { VerifyCountAggregate } from './verify-count-aggregate.output';
import { VerifyMinAggregate } from './verify-min-aggregate.output';
import { VerifyMaxAggregate } from './verify-max-aggregate.output';

@ObjectType()
export class VerifyGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

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

    @Field(() => VerifyCountAggregate, {nullable:true})
    _count?: VerifyCountAggregate;

    @Field(() => VerifyMinAggregate, {nullable:true})
    _min?: VerifyMinAggregate;

    @Field(() => VerifyMaxAggregate, {nullable:true})
    _max?: VerifyMaxAggregate;
}
