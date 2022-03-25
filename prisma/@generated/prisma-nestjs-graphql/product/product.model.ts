import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CurrencyEnum } from '../prisma/currency.enum';
import { EcommercePlatformEnum } from '../prisma/ecommerce-platform.enum';
import { User } from '../user/user.model';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    vendorId!: string | null;

    @Field(() => Int, {nullable:true,defaultValue:0})
    quantity!: number | null;

    @Field(() => String, {nullable:true})
    vendorName!: string | null;

    @Field(() => String, {nullable:true})
    vendorType!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => Float, {nullable:true})
    price!: number | null;

    @Field(() => Float, {nullable:true})
    unitPrice!: number | null;

    @Field(() => Boolean, {nullable:true})
    listedPublic!: boolean | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    gallery!: any | null;

    @Field(() => GraphQLJSON, {nullable:true})
    categories!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => CurrencyEnum, {nullable:true})
    currency!: keyof typeof CurrencyEnum | null;

    @Field(() => EcommercePlatformEnum, {nullable:true})
    ecommercePlatform!: keyof typeof EcommercePlatformEnum | null;

    @Field(() => String, {nullable:true})
    platformId!: string | null;

    @Field(() => String, {nullable:true})
    affiliateId!: string | null;

    @Field(() => User, {nullable:true})
    affiliate?: User | null;

    @Field(() => Wallet, {nullable:true})
    vendorWallet?: Wallet | null;
}
