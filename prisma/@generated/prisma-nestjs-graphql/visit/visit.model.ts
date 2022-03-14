import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';
import { User } from '../user/user.model';

@ObjectType()
export class Visit {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => String, {nullable:true})
    visitedBy!: string | null;

    @Field(() => String, {nullable:true})
    visitedByReference!: string | null;

    @Field(() => Date, {nullable:true})
    whenVisitTookPlace!: Date | null;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;

    @Field(() => User, {nullable:true})
    visited?: User | null;
}
