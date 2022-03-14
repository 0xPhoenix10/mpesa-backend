import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTransactionMethodEnumFilter } from '../prisma/enum-transaction-method-enum-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class SettlementScalarWhereInput {

    @Field(() => [SettlementScalarWhereInput], {nullable:true})
    AND?: Array<SettlementScalarWhereInput>;

    @Field(() => [SettlementScalarWhereInput], {nullable:true})
    OR?: Array<SettlementScalarWhereInput>;

    @Field(() => [SettlementScalarWhereInput], {nullable:true})
    NOT?: Array<SettlementScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumTransactionMethodEnumFilter, {nullable:true})
    type?: EnumTransactionMethodEnumFilter;

    @Field(() => StringFilter, {nullable:true})
    account?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bankAccount?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bankAccountName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bankBranch?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bankName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    verified?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    verifiedByUser?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    paybill?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    createdBy?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    createdByAgent?: BoolFilter;
}
