import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { CurrencyEnum } from '../prisma/currency.enum';
import { EcommercePlatformEnum } from '../prisma/ecommerce-platform.enum';
import { ProductCountAggregate } from './product-count-aggregate.output';
import { ProductAvgAggregate } from './product-avg-aggregate.output';
import { ProductSumAggregate } from './product-sum-aggregate.output';
import { ProductMinAggregate } from './product-min-aggregate.output';
import { ProductMaxAggregate } from './product-max-aggregate.output';

@ObjectType()
export class ProductGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    vendorId?: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => EcommercePlatformEnum, {nullable:true})
    ecommercePlatform?: keyof typeof EcommercePlatformEnum;

    @Field(() => String, {nullable:true})
    platformId?: string;

    @Field(() => String, {nullable:true})
    affiliateId?: string;

    @Field(() => ProductCountAggregate, {nullable:true})
    _count?: ProductCountAggregate;

    @Field(() => ProductAvgAggregate, {nullable:true})
    _avg?: ProductAvgAggregate;

    @Field(() => ProductSumAggregate, {nullable:true})
    _sum?: ProductSumAggregate;

    @Field(() => ProductMinAggregate, {nullable:true})
    _min?: ProductMinAggregate;

    @Field(() => ProductMaxAggregate, {nullable:true})
    _max?: ProductMaxAggregate;
}
