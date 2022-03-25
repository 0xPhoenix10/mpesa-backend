import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SettlementCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    account!: number;

    @Field(() => Int, {nullable:false})
    bankAccount!: number;

    @Field(() => Int, {nullable:false})
    bankAccountName!: number;

    @Field(() => Int, {nullable:false})
    bankBranch!: number;

    @Field(() => Int, {nullable:false})
    bankName!: number;

    @Field(() => Int, {nullable:false})
    phoneNumber!: number;

    @Field(() => Int, {nullable:false})
    tillNumber!: number;

    @Field(() => Int, {nullable:false})
    paybillNumber!: number;

    @Field(() => Int, {nullable:false})
    verified!: number;

    @Field(() => Int, {nullable:false})
    verifiedByUser!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    createdBy!: number;

    @Field(() => Int, {nullable:false})
    createdByAgent!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
