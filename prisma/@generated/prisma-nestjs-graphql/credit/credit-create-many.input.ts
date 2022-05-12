import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';
import { creditRefType } from '../prisma/credit-ref-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { creditStatusEnum } from '../prisma/credit-status.enum';
import { SlicesEnum } from '../prisma/slices.enum';

@InputType()
export class CreditCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    typeId?: string;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => creditRefType, {nullable:true})
    type?: keyof typeof creditRefType;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => String, {nullable:true})
    debtorId?: string;

    @Field(() => String, {nullable:true})
    creditorId?: string;

    @Field(() => Int, {nullable:true})
    installmentsCount?: number;

    @Field(() => Int, {nullable:true})
    installmentsCountPaid?: number;

    @Field(() => creditStatusEnum, {nullable:true})
    status?: keyof typeof creditStatusEnum;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Float, {nullable:true})
    totalPaid?: number;

    @Field(() => Float, {nullable:true})
    totalToPay?: number;

    @Field(() => Date, {nullable:true})
    agreedDate?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    referenceNumber!: string;

    @Field(() => String, {nullable:false})
    creditConfigurationId!: string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:true})
    paidAt?: Date | string;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => SlicesEnum, {nullable:false})
    durationSlices!: keyof typeof SlicesEnum;

    @Field(() => String, {nullable:true})
    affiliateId?: string;

    @Field(() => Date, {nullable:true})
    defaultAt?: Date | string;

    @Field(() => Float, {nullable:true})
    fundUpfrontAmount?: number;

    @Field(() => String, {nullable:true})
    orderWalletId?: string;

    @Field(() => Float, {nullable:true})
    fundFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    amountWithFees?: number;

    @Field(() => Float, {nullable:true})
    payNowAmount?: number;

    @Field(() => Float, {nullable:true})
    seviFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    orderWalletShareFeesAmount?: number;

    @Field(() => Float, {nullable:true})
    fundPostDeliveryAmount?: number;

    @Field(() => Float, {nullable:true})
    payLaterAmount?: number;
}
