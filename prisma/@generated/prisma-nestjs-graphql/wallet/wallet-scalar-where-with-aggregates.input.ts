import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumWalletTypesEnumWithAggregatesFilter } from '../prisma/enum-wallet-types-enum-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumCurrencyEnumNullableWithAggregatesFilter } from '../prisma/enum-currency-enum-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class WalletScalarWhereWithAggregatesInput {

    @Field(() => [WalletScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<WalletScalarWhereWithAggregatesInput>;

    @Field(() => [WalletScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<WalletScalarWhereWithAggregatesInput>;

    @Field(() => [WalletScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<WalletScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    category?: StringNullableWithAggregatesFilter;

    @Field(() => EnumWalletTypesEnumWithAggregatesFilter, {nullable:true})
    type?: EnumWalletTypesEnumWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    balance?: FloatWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    account?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => EnumCurrencyEnumNullableWithAggregatesFilter, {nullable:true})
    currency?: EnumCurrencyEnumNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    settlementAutomatic?: BoolNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    settlementDefaultId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    verificationStartedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    shippingId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    picture?: StringNullableWithAggregatesFilter;
}
