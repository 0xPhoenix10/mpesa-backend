import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TransactionMethodEnum } from '../prisma/transaction-method.enum';
import { Wallet } from '../wallet/wallet.model';
import { User } from '../user/user.model';
import { SettlementCount } from './settlement-count.output';

@ObjectType()
export class Settlement {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => TransactionMethodEnum, {nullable:false})
    type!: keyof typeof TransactionMethodEnum;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => String, {nullable:true})
    bankAccount!: string | null;

    @Field(() => String, {nullable:true})
    bankAccountName!: string | null;

    @Field(() => String, {nullable:true})
    bankBranch!: string | null;

    @Field(() => String, {nullable:true})
    bankName!: string | null;

    @Field(() => String, {nullable:true})
    phoneNumber!: string | null;

    @Field(() => Boolean, {nullable:true})
    verified!: boolean | null;

    @Field(() => String, {nullable:true})
    verifiedByUser!: string | null;

    @Field(() => String, {nullable:true})
    paybill!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => Boolean, {nullable:false})
    createdByAgent!: boolean;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;

    @Field(() => User, {nullable:false})
    settlementCreator?: User;

    @Field(() => User, {nullable:true})
    settlementVerifier?: User | null;

    @Field(() => [Wallet], {nullable:true})
    Wallet?: Array<Wallet>;

    @Field(() => SettlementCount, {nullable:false})
    _count?: SettlementCount;
}
