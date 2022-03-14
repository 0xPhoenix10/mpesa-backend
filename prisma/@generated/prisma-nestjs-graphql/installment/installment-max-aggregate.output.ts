import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { installmentStatusTypeEnum } from '../prisma/installment-status-type.enum';
import { CurrencyEnum } from '../prisma/currency.enum';

@ObjectType()
export class InstallmentMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    installmentCount?: number;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => String, {nullable:true})
    referenceNumber?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Float, {nullable:true})
    amountWithPenalty?: number;

    @Field(() => Float, {nullable:true})
    seviFees?: number;

    @Field(() => Float, {nullable:true})
    penalty?: number;

    @Field(() => Date, {nullable:true})
    paidAt?: Date | string;

    @Field(() => String, {nullable:true})
    creditConfigurationId?: string;

    @Field(() => Float, {nullable:true})
    affiliateFees?: number;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;
}
