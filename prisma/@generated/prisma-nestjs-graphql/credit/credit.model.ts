import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';
import { creditRefType } from '../prisma/credit-ref-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { creditStatusEnum } from '../prisma/credit-status.enum';
import { SlicesEnum } from '../prisma/slices.enum';
import { User } from '../user/user.model';
import { CreditConfiguration } from '../credit-configuration/credit-configuration.model';
import { Wallet } from '../wallet/wallet.model';
import { Order } from '../order/order.model';
import { Installment } from '../installment/installment.model';
import { CreditCount } from './credit-count.output';

@ObjectType()
export class Credit {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    typeId!: string | null;

    @Field(() => CurrencyEnum, {nullable:true})
    currency!: keyof typeof CurrencyEnum | null;

    @Field(() => String, {nullable:true})
    orderId!: string | null;

    @Field(() => creditRefType, {nullable:true})
    type!: keyof typeof creditRefType | null;

    @Field(() => Float, {nullable:true})
    amount!: number | null;

    @Field(() => String, {nullable:true})
    debtorId!: string | null;

    @Field(() => String, {nullable:true})
    creditorId!: string | null;

    @Field(() => Int, {nullable:true})
    installmentsCount!: number | null;

    @Field(() => Int, {nullable:true})
    installmentsCountPaid!: number | null;

    @Field(() => creditStatusEnum, {nullable:true})
    status!: keyof typeof creditStatusEnum | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Float, {nullable:true})
    totalPaid!: number | null;

    @Field(() => Float, {nullable:true})
    totalToPay!: number | null;

    @Field(() => Date, {nullable:true})
    agreedDate!: Date | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    referenceNumber!: string;

    @Field(() => String, {nullable:false})
    creditConfigurationId!: string;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => Date, {nullable:true})
    paidAt!: Date | null;

    @Field(() => Int, {nullable:true})
    duration!: number | null;

    @Field(() => SlicesEnum, {nullable:false})
    durationSlices!: keyof typeof SlicesEnum;

    @Field(() => String, {nullable:true})
    affiliateId!: string | null;

    @Field(() => Date, {nullable:true})
    defaultAt!: Date | null;

    @Field(() => Float, {nullable:true,defaultValue:0})
    fundUpfrontAmount!: number | null;

    @Field(() => String, {nullable:true})
    orderWalletId!: string | null;

    @Field(() => Float, {nullable:true,defaultValue:0})
    fundFeesAmount!: number | null;

    @Field(() => Float, {nullable:true})
    amountWithFees!: number | null;

    @Field(() => Float, {nullable:true,defaultValue:0})
    payNowAmount!: number | null;

    @Field(() => Float, {nullable:true})
    seviFeesAmount!: number | null;

    @Field(() => Float, {nullable:true,defaultValue:0})
    orderWalletShareFeesAmount!: number | null;

    @Field(() => Float, {nullable:true,defaultValue:0})
    fundPostDeliveryAmount!: number | null;

    @Field(() => User, {nullable:true})
    affiliate?: User | null;

    @Field(() => CreditConfiguration, {nullable:false})
    creditConfiguration?: CreditConfiguration;

    @Field(() => Wallet, {nullable:true})
    creditor?: Wallet | null;

    @Field(() => Wallet, {nullable:true})
    debtor?: Wallet | null;

    @Field(() => Order, {nullable:true})
    order?: Order | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [Installment], {nullable:true})
    installments?: Array<Installment>;

    @Field(() => Float, {nullable:true})
    payLaterAmount!: number | null;

    @Field(() => CreditCount, {nullable:false})
    _count?: CreditCount;
}
