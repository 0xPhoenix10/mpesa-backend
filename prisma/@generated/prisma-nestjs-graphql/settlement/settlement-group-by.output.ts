import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TransactionMethodEnum } from '../prisma/transaction-method.enum';
import { SettlementCountAggregate } from './settlement-count-aggregate.output';
import { SettlementMinAggregate } from './settlement-min-aggregate.output';
import { SettlementMaxAggregate } from './settlement-max-aggregate.output';

@ObjectType()
export class SettlementGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => TransactionMethodEnum, {nullable:false})
    type!: keyof typeof TransactionMethodEnum;

    @Field(() => String, {nullable:false})
    account!: string;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    createdBy!: string;

    @Field(() => Boolean, {nullable:false})
    createdByAgent!: boolean;

    @Field(() => SettlementCountAggregate, {nullable:true})
    _count?: SettlementCountAggregate;

    @Field(() => SettlementMinAggregate, {nullable:true})
    _min?: SettlementMinAggregate;

    @Field(() => SettlementMaxAggregate, {nullable:true})
    _max?: SettlementMaxAggregate;
}
