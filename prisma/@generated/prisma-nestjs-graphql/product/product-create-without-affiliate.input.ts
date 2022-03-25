import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CurrencyEnum } from '../prisma/currency.enum';
import { EcommercePlatformEnum } from '../prisma/ecommerce-platform.enum';
import { WalletCreateNestedOneWithoutProductInput } from '../wallet/wallet-create-nested-one-without-product.input';

@InputType()
export class ProductCreateWithoutAffiliateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    vendorName?: string;

    @Field(() => String, {nullable:true})
    vendorType?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => Float, {nullable:true})
    unitPrice?: number;

    @Field(() => Boolean, {nullable:true})
    listedPublic?: boolean;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    gallery?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    categories?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => EcommercePlatformEnum, {nullable:true})
    ecommercePlatform?: keyof typeof EcommercePlatformEnum;

    @Field(() => String, {nullable:true})
    platformId?: string;

    @Field(() => WalletCreateNestedOneWithoutProductInput, {nullable:true})
    vendorWallet?: WalletCreateNestedOneWithoutProductInput;
}
