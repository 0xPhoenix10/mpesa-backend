import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumWalletTypesEnumFilter } from '../prisma/enum-wallet-types-enum-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumCurrencyEnumNullableFilter } from '../prisma/enum-currency-enum-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class WalletScalarWhereInput {

    @Field(() => [WalletScalarWhereInput], {nullable:true})
    AND?: Array<WalletScalarWhereInput>;

    @Field(() => [WalletScalarWhereInput], {nullable:true})
    OR?: Array<WalletScalarWhereInput>;

    @Field(() => [WalletScalarWhereInput], {nullable:true})
    NOT?: Array<WalletScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    category?: StringNullableFilter;

    @Field(() => EnumWalletTypesEnumFilter, {nullable:true})
    type?: EnumWalletTypesEnumFilter;

    @Field(() => FloatFilter, {nullable:true})
    balance?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    account?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => EnumCurrencyEnumNullableFilter, {nullable:true})
    currency?: EnumCurrencyEnumNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    settlementAutomatic?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    settlementDefaultId?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    verificationStartedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shippingId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    picture?: StringNullableFilter;
}
