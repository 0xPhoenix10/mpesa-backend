import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTransactionMethodEnumFilter } from '../prisma/enum-transaction-method-enum-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { WalletListRelationFilter } from '../wallet/wallet-list-relation-filter.input';

@InputType()
export class SettlementWhereInput {

    @Field(() => [SettlementWhereInput], {nullable:true})
    AND?: Array<SettlementWhereInput>;

    @Field(() => [SettlementWhereInput], {nullable:true})
    OR?: Array<SettlementWhereInput>;

    @Field(() => [SettlementWhereInput], {nullable:true})
    NOT?: Array<SettlementWhereInput>;

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

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    settlementCreator?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    settlementVerifier?: UserRelationFilter;

    @Field(() => WalletListRelationFilter, {nullable:true})
    Wallet?: WalletListRelationFilter;
}
