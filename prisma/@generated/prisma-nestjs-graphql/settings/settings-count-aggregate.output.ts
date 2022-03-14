import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SettingsCountAggregate {

    @Field(() => Int, {nullable:false})
    woocommerceUrl!: number;

    @Field(() => Int, {nullable:false})
    woocommerceConsumerKey!: number;

    @Field(() => Int, {nullable:false})
    woocommerceActive!: number;

    @Field(() => Int, {nullable:false})
    woocommerceConsumerSecret!: number;

    @Field(() => Int, {nullable:false})
    walletAccount!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
