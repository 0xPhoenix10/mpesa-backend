import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WalletTypesEnum } from '../prisma/wallet-types.enum';
import { Float } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';

@ObjectType()
export class WalletMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => WalletTypesEnum, {nullable:true})
    type?: keyof typeof WalletTypesEnum;

    @Field(() => Float, {nullable:true})
    balance?: number;

    @Field(() => String, {nullable:true})
    account?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => Boolean, {nullable:true})
    settlementAutomatic?: boolean;

    @Field(() => String, {nullable:true})
    settlementDefaultId?: string;

    @Field(() => Date, {nullable:true})
    verificationStartedAt?: Date | string;

    @Field(() => String, {nullable:true})
    shippingId?: string;

    @Field(() => String, {nullable:true})
    picture?: string;
}
