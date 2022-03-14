import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WalletTypesEnum } from '../prisma/wallet-types.enum';
import { Float } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';
import { WalletCountAggregate } from './wallet-count-aggregate.output';
import { WalletAvgAggregate } from './wallet-avg-aggregate.output';
import { WalletSumAggregate } from './wallet-sum-aggregate.output';
import { WalletMinAggregate } from './wallet-min-aggregate.output';
import { WalletMaxAggregate } from './wallet-max-aggregate.output';

@ObjectType()
export class WalletGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => WalletTypesEnum, {nullable:false})
    type!: keyof typeof WalletTypesEnum;

    @Field(() => Float, {nullable:false})
    balance!: number;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

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

    @Field(() => WalletCountAggregate, {nullable:true})
    _count?: WalletCountAggregate;

    @Field(() => WalletAvgAggregate, {nullable:true})
    _avg?: WalletAvgAggregate;

    @Field(() => WalletSumAggregate, {nullable:true})
    _sum?: WalletSumAggregate;

    @Field(() => WalletMinAggregate, {nullable:true})
    _min?: WalletMinAggregate;

    @Field(() => WalletMaxAggregate, {nullable:true})
    _max?: WalletMaxAggregate;
}
