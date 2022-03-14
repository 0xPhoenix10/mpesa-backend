import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class Trust {

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Float, {nullable:true})
    trustRating!: number | null;

    @Field(() => Float, {nullable:true})
    score!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Wallet, {nullable:true})
    Wallet?: Wallet | null;
}
