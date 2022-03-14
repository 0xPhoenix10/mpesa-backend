import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PaymentTypesEnum } from '../prisma/payment-types.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { TransactionTypeEnum } from '../prisma/transaction-type.enum';
import { TransactionMethodEnum } from '../prisma/transaction-method.enum';
import { TransactionCountAggregate } from './transaction-count-aggregate.output';
import { TransactionAvgAggregate } from './transaction-avg-aggregate.output';
import { TransactionSumAggregate } from './transaction-sum-aggregate.output';
import { TransactionMinAggregate } from './transaction-min-aggregate.output';
import { TransactionMaxAggregate } from './transaction-max-aggregate.output';

@ObjectType()
export class TransactionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    fee!: number;

    @Field(() => Float, {nullable:false})
    totalAmount!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PaymentTypesEnum, {nullable:false})
    paymentType!: keyof typeof PaymentTypesEnum;

    @Field(() => String, {nullable:true})
    paymentTypeId?: string;

    @Field(() => CurrencyEnum, {nullable:false})
    currency!: keyof typeof CurrencyEnum;

    @Field(() => TransactionTypeEnum, {nullable:true})
    transactionType?: keyof typeof TransactionTypeEnum;

    @Field(() => TransactionMethodEnum, {nullable:true})
    method?: keyof typeof TransactionMethodEnum;

    @Field(() => String, {nullable:true})
    walletId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    balanceAfter?: number;

    @Field(() => Float, {nullable:true})
    balanceBefore?: number;

    @Field(() => TransactionCountAggregate, {nullable:true})
    _count?: TransactionCountAggregate;

    @Field(() => TransactionAvgAggregate, {nullable:true})
    _avg?: TransactionAvgAggregate;

    @Field(() => TransactionSumAggregate, {nullable:true})
    _sum?: TransactionSumAggregate;

    @Field(() => TransactionMinAggregate, {nullable:true})
    _min?: TransactionMinAggregate;

    @Field(() => TransactionMaxAggregate, {nullable:true})
    _max?: TransactionMaxAggregate;
}
