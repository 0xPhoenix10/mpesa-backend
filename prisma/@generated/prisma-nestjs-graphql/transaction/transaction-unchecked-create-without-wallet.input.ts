import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PaymentTypesEnum } from '../prisma/payment-types.enum';
import { CurrencyEnum } from '../prisma/currency.enum';
import { TransactionTypeEnum } from '../prisma/transaction-type.enum';
import { TransactionMethodEnum } from '../prisma/transaction-method.enum';

@InputType()
export class TransactionUncheckedCreateWithoutWalletInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => TransactionTypeEnum, {nullable:true})
    transactionType?: keyof typeof TransactionTypeEnum;

    @Field(() => TransactionMethodEnum, {nullable:true})
    method?: keyof typeof TransactionMethodEnum;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    balanceAfter?: number;

    @Field(() => Float, {nullable:true})
    balanceBefore?: number;
}
