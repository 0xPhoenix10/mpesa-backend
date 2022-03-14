import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class WalletCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    category!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    balance!: number;

    @Field(() => Int, {nullable:false})
    account!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    currency!: number;

    @Field(() => Int, {nullable:false})
    settlementAutomatic!: number;

    @Field(() => Int, {nullable:false})
    settlementDefaultId!: number;

    @Field(() => Int, {nullable:false})
    verificationStartedAt!: number;

    @Field(() => Int, {nullable:false})
    shippingId!: number;

    @Field(() => Int, {nullable:false})
    picture!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
