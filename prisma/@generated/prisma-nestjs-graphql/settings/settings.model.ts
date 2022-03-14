import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class Settings {

    @Field(() => String, {nullable:true})
    woocommerceUrl!: string | null;

    @Field(() => String, {nullable:true})
    woocommerceConsumerKey!: string | null;

    @Field(() => Boolean, {nullable:true})
    woocommerceActive!: boolean | null;

    @Field(() => String, {nullable:true})
    woocommerceConsumerSecret!: string | null;

    @Field(() => ID, {nullable:false})
    walletAccount!: string;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;
}
