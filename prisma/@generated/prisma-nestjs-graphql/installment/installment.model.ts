import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { installmentStatusTypeEnum } from '../prisma/installment-status-type.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { CreditConfiguration } from '../credit-configuration/credit-configuration.model';
import { Credit } from '../credit/credit.model';
import { Wallet } from '../wallet/wallet.model';
import { Order } from '../order/order.model';
import { User } from '../user/user.model';

@ObjectType()
export class Installment {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    installmentCount!: number | null;

    @Field(() => Date, {nullable:true})
    startDate!: Date | null;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => String, {nullable:true})
    referenceNumber!: string | null;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    paidAmount!: number;

    @Field(() => String, {nullable:true})
    debtorId!: string | null;

    @Field(() => String, {nullable:true})
    creditorId!: string | null;

    @Field(() => String, {nullable:true})
    orderId!: string | null;

    @Field(() => installmentStatusTypeEnum, {nullable:true})
    status!: keyof typeof installmentStatusTypeEnum | null;

    @Field(() => Date, {nullable:true})
    firstTryFailedAt!: Date | null;

    @Field(() => String, {nullable:true})
    creditId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Float, {nullable:false})
    amountWithPenalty!: number;

    @Field(() => Float, {nullable:false})
    seviFees!: number;

    @Field(() => Float, {nullable:false,defaultValue:0})
    penalty!: number;

    @Field(() => Date, {nullable:true})
    paidAt!: Date | null;

    @Field(() => String, {nullable:false})
    creditConfigurationId!: string;

    @Field(() => Float, {nullable:false})
    affiliateFees!: number;

    @Field(() => CurrencyEnum, {nullable:true})
    currency!: keyof typeof CurrencyEnum | null;

    @Field(() => CreditConfiguration, {nullable:false})
    creditConfiguration?: CreditConfiguration;

    @Field(() => Credit, {nullable:true})
    credit?: Credit | null;

    @Field(() => Wallet, {nullable:true})
    creditor?: Wallet | null;

    @Field(() => Wallet, {nullable:true})
    debtor?: Wallet | null;

    @Field(() => Order, {nullable:true})
    order?: Order | null;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
