import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TransactionMethodEnum } from '../prisma/transaction-method.enum';

@ObjectType()
export class SettlementMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => TransactionMethodEnum, {nullable:true})
    type?: keyof typeof TransactionMethodEnum;

    @Field(() => String, {nullable:true})
    account?: string;

    @Field(() => String, {nullable:true})
    bankAccount?: string;

    @Field(() => String, {nullable:true})
    bankAccountName?: string;

    @Field(() => String, {nullable:true})
    bankBranch?: string;

    @Field(() => String, {nullable:true})
    bankName?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => String, {nullable:true})
    tillNumber?: string;

    @Field(() => String, {nullable:true})
    paybillNumber?: string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => String, {nullable:true})
    verifiedByUser?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdBy?: string;

    @Field(() => Boolean, {nullable:true})
    createdByAgent?: boolean;
}
