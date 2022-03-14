import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { OrderPaymentMethodsEnum } from '../prisma/order-payment-methods.enum';
import { User } from '../user/user.model';

@ObjectType()
export class Verify {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    UID!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => CountryCode, {nullable:true})
    countryCode!: keyof typeof CountryCode | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => String, {nullable:true})
    creditConfigId!: string | null;

    @Field(() => String, {nullable:true})
    OTP!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => OrderPaymentMethodsEnum, {nullable:true})
    orderPaymentMethod!: keyof typeof OrderPaymentMethodsEnum | null;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
