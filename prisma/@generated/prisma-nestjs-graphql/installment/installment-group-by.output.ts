import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { installmentStatusTypeEnum } from '../prisma/installment-status-type.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { InstallmentCountAggregate } from './installment-count-aggregate.output';
import { InstallmentAvgAggregate } from './installment-avg-aggregate.output';
import { InstallmentSumAggregate } from './installment-sum-aggregate.output';
import { InstallmentMinAggregate } from './installment-min-aggregate.output';
import { InstallmentMaxAggregate } from './installment-max-aggregate.output';

@ObjectType()
export class InstallmentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    installmentCount?: number;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    referenceNumber?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    debtorId?: string;

    @Field(() => String, {nullable:true})
    creditorId?: string;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => installmentStatusTypeEnum, {nullable:true})
    status?: keyof typeof installmentStatusTypeEnum;

    @Field(() => Date, {nullable:true})
    firstTryFailedAt?: Date | string;

    @Field(() => String, {nullable:true})
    creditId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Float, {nullable:false})
    amountWithPenalty!: number;

    @Field(() => Float, {nullable:false})
    seviFees!: number;

    @Field(() => Float, {nullable:false})
    penalty!: number;

    @Field(() => Date, {nullable:true})
    paidAt?: Date | string;

    @Field(() => String, {nullable:false})
    creditConfigurationId!: string;

    @Field(() => Float, {nullable:false})
    affiliateFees!: number;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => InstallmentCountAggregate, {nullable:true})
    _count?: InstallmentCountAggregate;

    @Field(() => InstallmentAvgAggregate, {nullable:true})
    _avg?: InstallmentAvgAggregate;

    @Field(() => InstallmentSumAggregate, {nullable:true})
    _sum?: InstallmentSumAggregate;

    @Field(() => InstallmentMinAggregate, {nullable:true})
    _min?: InstallmentMinAggregate;

    @Field(() => InstallmentMaxAggregate, {nullable:true})
    _max?: InstallmentMaxAggregate;
}
