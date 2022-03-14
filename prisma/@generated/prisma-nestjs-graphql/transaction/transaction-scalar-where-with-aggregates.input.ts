import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumPaymentTypesEnumWithAggregatesFilter } from '../prisma/enum-payment-types-enum-with-aggregates-filter.input';
import { EnumCurrencyEnumWithAggregatesFilter } from '../prisma/enum-currency-enum-with-aggregates-filter.input';
import { EnumTransactionTypeEnumNullableWithAggregatesFilter } from '../prisma/enum-transaction-type-enum-nullable-with-aggregates-filter.input';
import { EnumTransactionMethodEnumNullableWithAggregatesFilter } from '../prisma/enum-transaction-method-enum-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';

@InputType()
export class TransactionScalarWhereWithAggregatesInput {

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TransactionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    fee?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    totalAmount?: FloatWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => EnumPaymentTypesEnumWithAggregatesFilter, {nullable:true})
    paymentType?: EnumPaymentTypesEnumWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    paymentTypeId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumCurrencyEnumWithAggregatesFilter, {nullable:true})
    currency?: EnumCurrencyEnumWithAggregatesFilter;

    @Field(() => EnumTransactionTypeEnumNullableWithAggregatesFilter, {nullable:true})
    transactionType?: EnumTransactionTypeEnumNullableWithAggregatesFilter;

    @Field(() => EnumTransactionMethodEnumNullableWithAggregatesFilter, {nullable:true})
    method?: EnumTransactionMethodEnumNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    walletId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    balanceAfter?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    balanceBefore?: FloatNullableWithAggregatesFilter;
}
