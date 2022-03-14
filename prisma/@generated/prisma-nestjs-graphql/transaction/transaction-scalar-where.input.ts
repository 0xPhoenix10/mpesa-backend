import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumPaymentTypesEnumFilter } from '../prisma/enum-payment-types-enum-filter.input';
import { EnumCurrencyEnumFilter } from '../prisma/enum-currency-enum-filter.input';
import { EnumTransactionTypeEnumNullableFilter } from '../prisma/enum-transaction-type-enum-nullable-filter.input';
import { EnumTransactionMethodEnumNullableFilter } from '../prisma/enum-transaction-method-enum-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';

@InputType()
export class TransactionScalarWhereInput {

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    AND?: Array<TransactionScalarWhereInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    OR?: Array<TransactionScalarWhereInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    NOT?: Array<TransactionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    fee?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalAmount?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumPaymentTypesEnumFilter, {nullable:true})
    paymentType?: EnumPaymentTypesEnumFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    paymentTypeId?: StringNullableFilter;

    @Field(() => EnumCurrencyEnumFilter, {nullable:true})
    currency?: EnumCurrencyEnumFilter;

    @Field(() => EnumTransactionTypeEnumNullableFilter, {nullable:true})
    transactionType?: EnumTransactionTypeEnumNullableFilter;

    @Field(() => EnumTransactionMethodEnumNullableFilter, {nullable:true})
    method?: EnumTransactionMethodEnumNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    walletId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    balanceAfter?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    balanceBefore?: FloatNullableFilter;
}
