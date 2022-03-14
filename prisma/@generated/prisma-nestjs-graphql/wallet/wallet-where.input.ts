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
import { SettlementRelationFilter } from '../settlement/settlement-relation-filter.input';
import { AnswerListRelationFilter } from '../answer/answer-list-relation-filter.input';
import { BadgeListRelationFilter } from '../badge/badge-list-relation-filter.input';
import { BillingListRelationFilter } from '../billing/billing-list-relation-filter.input';
import { CreditListRelationFilter } from '../credit/credit-list-relation-filter.input';
import { CreditConfigurationListRelationFilter } from '../credit-configuration/credit-configuration-list-relation-filter.input';
import { CustomerListRelationFilter } from '../customer/customer-list-relation-filter.input';
import { InstallmentListRelationFilter } from '../installment/installment-list-relation-filter.input';
import { MetaDataRelationFilter } from '../meta-data/meta-data-relation-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { SettingsRelationFilter } from '../settings/settings-relation-filter.input';
import { SettlementListRelationFilter } from '../settlement/settlement-list-relation-filter.input';
import { ShippingListRelationFilter } from '../shipping/shipping-list-relation-filter.input';
import { SupplierListRelationFilter } from '../supplier/supplier-list-relation-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';
import { UsersWalletsListRelationFilter } from '../users-wallets/users-wallets-list-relation-filter.input';
import { VisitListRelationFilter } from '../visit/visit-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { TrustRelationFilter } from '../trust/trust-relation-filter.input';

@InputType()
export class WalletWhereInput {

    @Field(() => [WalletWhereInput], {nullable:true})
    AND?: Array<WalletWhereInput>;

    @Field(() => [WalletWhereInput], {nullable:true})
    OR?: Array<WalletWhereInput>;

    @Field(() => [WalletWhereInput], {nullable:true})
    NOT?: Array<WalletWhereInput>;

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

    @Field(() => SettlementRelationFilter, {nullable:true})
    settlementDefault?: SettlementRelationFilter;

    @Field(() => AnswerListRelationFilter, {nullable:true})
    answers?: AnswerListRelationFilter;

    @Field(() => BadgeListRelationFilter, {nullable:true})
    badges?: BadgeListRelationFilter;

    @Field(() => BillingListRelationFilter, {nullable:true})
    billing?: BillingListRelationFilter;

    @Field(() => CreditListRelationFilter, {nullable:true})
    creditorCredit?: CreditListRelationFilter;

    @Field(() => CreditListRelationFilter, {nullable:true})
    debtorCredit?: CreditListRelationFilter;

    @Field(() => CreditConfigurationListRelationFilter, {nullable:true})
    creditConfigurations?: CreditConfigurationListRelationFilter;

    @Field(() => CustomerListRelationFilter, {nullable:true})
    customer?: CustomerListRelationFilter;

    @Field(() => CustomerListRelationFilter, {nullable:true})
    vendor?: CustomerListRelationFilter;

    @Field(() => InstallmentListRelationFilter, {nullable:true})
    creditorInstallments?: InstallmentListRelationFilter;

    @Field(() => InstallmentListRelationFilter, {nullable:true})
    debtorInstallments?: InstallmentListRelationFilter;

    @Field(() => MetaDataRelationFilter, {nullable:true})
    metaData?: MetaDataRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    order?: OrderListRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    orders?: OrderListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    product?: ProductListRelationFilter;

    @Field(() => SettingsRelationFilter, {nullable:true})
    settings?: SettingsRelationFilter;

    @Field(() => SettlementListRelationFilter, {nullable:true})
    settlement?: SettlementListRelationFilter;

    @Field(() => ShippingListRelationFilter, {nullable:true})
    shipping?: ShippingListRelationFilter;

    @Field(() => SupplierListRelationFilter, {nullable:true})
    supplier?: SupplierListRelationFilter;

    @Field(() => SupplierListRelationFilter, {nullable:true})
    vendorSupplier?: SupplierListRelationFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    transaction?: TransactionListRelationFilter;

    @Field(() => UsersWalletsListRelationFilter, {nullable:true})
    usersWallets?: UsersWalletsListRelationFilter;

    @Field(() => VisitListRelationFilter, {nullable:true})
    visit?: VisitListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => TrustRelationFilter, {nullable:true})
    trust?: TrustRelationFilter;
}
