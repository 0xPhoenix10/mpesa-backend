import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletTypesEnum } from '../prisma/wallet-types.enum';
import { Float } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';

@InputType()
export class WalletCreateManySettlementDefaultInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => WalletTypesEnum, {nullable:false})
    type!: keyof typeof WalletTypesEnum;

    @Field(() => Float, {nullable:true})
    balance?: number;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => Boolean, {nullable:true})
    settlementAutomatic?: boolean;

    @Field(() => Date, {nullable:true})
    verificationStartedAt?: Date | string;

    @Field(() => String, {nullable:true})
    shippingId?: string;

    @Field(() => String, {nullable:true})
    picture?: string;
}
