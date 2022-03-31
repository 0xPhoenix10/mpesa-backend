import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BadgeType } from '../prisma/badge-type.enum';
import { Int } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class Badge {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    active!: boolean | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => BadgeType, {nullable:true})
    type!: keyof typeof BadgeType | null;

    @Field(() => Int, {nullable:true,defaultValue:1})
    count!: number | null;

    @Field(() => Int, {nullable:true,defaultValue:1})
    level!: number | null;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;
}
