import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PaymentTypesEnum } from '../prisma/payment-types.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { TransactionTypeEnum } from '../prisma/transaction-type.enum';
import { TransactionMethodEnum } from '../prisma/transaction-method.enum';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class Transaction {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    fee!: number;

    @Field(() => Float, {nullable:false})
    totalAmount!: number;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => PaymentTypesEnum, {nullable:false})
    paymentType!: keyof typeof PaymentTypesEnum;

    @Field(() => String, {nullable:true})
    paymentTypeId!: string | null;

    @Field(() => CurrencyEnum, {nullable:false,defaultValue:'KES'})
    currency!: keyof typeof CurrencyEnum;

    @Field(() => TransactionTypeEnum, {nullable:true})
    transactionType!: keyof typeof TransactionTypeEnum | null;

    @Field(() => TransactionMethodEnum, {nullable:true})
    method!: keyof typeof TransactionMethodEnum | null;

    @Field(() => String, {nullable:true})
    walletId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => Float, {nullable:true})
    balanceAfter!: number | null;

    @Field(() => Float, {nullable:true})
    balanceBefore!: number | null;

    @Field(() => Wallet, {nullable:true})
    wallet?: Wallet | null;
}
