import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SettlementOrderByWithRelationInput } from '../settlement/settlement-order-by-with-relation.input';
import { AnswerOrderByRelationAggregateInput } from '../answer/answer-order-by-relation-aggregate.input';
import { BadgeOrderByRelationAggregateInput } from '../badge/badge-order-by-relation-aggregate.input';
import { BillingOrderByRelationAggregateInput } from '../billing/billing-order-by-relation-aggregate.input';
import { CreditOrderByRelationAggregateInput } from '../credit/credit-order-by-relation-aggregate.input';
import { CreditConfigurationOrderByRelationAggregateInput } from '../credit-configuration/credit-configuration-order-by-relation-aggregate.input';
import { CustomerOrderByRelationAggregateInput } from '../customer/customer-order-by-relation-aggregate.input';
import { InstallmentOrderByRelationAggregateInput } from '../installment/installment-order-by-relation-aggregate.input';
import { MetaDataOrderByWithRelationInput } from '../meta-data/meta-data-order-by-with-relation.input';
import { OrderOrderByRelationAggregateInput } from '../order/order-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { SettingsOrderByWithRelationInput } from '../settings/settings-order-by-with-relation.input';
import { SettlementOrderByRelationAggregateInput } from '../settlement/settlement-order-by-relation-aggregate.input';
import { ShippingOrderByRelationAggregateInput } from '../shipping/shipping-order-by-relation-aggregate.input';
import { SupplierOrderByRelationAggregateInput } from '../supplier/supplier-order-by-relation-aggregate.input';
import { TransactionOrderByRelationAggregateInput } from '../transaction/transaction-order-by-relation-aggregate.input';
import { UsersWalletsOrderByRelationAggregateInput } from '../users-wallets/users-wallets-order-by-relation-aggregate.input';
import { VisitOrderByRelationAggregateInput } from '../visit/visit-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { TrustOrderByWithRelationInput } from '../trust/trust-order-by-with-relation.input';

@InputType()
export class WalletOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    settlementAutomatic?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    settlementDefaultId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verificationStartedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shippingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    picture?: keyof typeof SortOrder;

    @Field(() => SettlementOrderByWithRelationInput, {nullable:true})
    settlementDefault?: SettlementOrderByWithRelationInput;

    @Field(() => AnswerOrderByRelationAggregateInput, {nullable:true})
    answers?: AnswerOrderByRelationAggregateInput;

    @Field(() => BadgeOrderByRelationAggregateInput, {nullable:true})
    badges?: BadgeOrderByRelationAggregateInput;

    @Field(() => BillingOrderByRelationAggregateInput, {nullable:true})
    billing?: BillingOrderByRelationAggregateInput;

    @Field(() => CreditOrderByRelationAggregateInput, {nullable:true})
    creditorCredit?: CreditOrderByRelationAggregateInput;

    @Field(() => CreditOrderByRelationAggregateInput, {nullable:true})
    debtorCredit?: CreditOrderByRelationAggregateInput;

    @Field(() => CreditConfigurationOrderByRelationAggregateInput, {nullable:true})
    creditConfigurations?: CreditConfigurationOrderByRelationAggregateInput;

    @Field(() => CustomerOrderByRelationAggregateInput, {nullable:true})
    customer?: CustomerOrderByRelationAggregateInput;

    @Field(() => CustomerOrderByRelationAggregateInput, {nullable:true})
    vendor?: CustomerOrderByRelationAggregateInput;

    @Field(() => InstallmentOrderByRelationAggregateInput, {nullable:true})
    creditorInstallments?: InstallmentOrderByRelationAggregateInput;

    @Field(() => InstallmentOrderByRelationAggregateInput, {nullable:true})
    debtorInstallments?: InstallmentOrderByRelationAggregateInput;

    @Field(() => MetaDataOrderByWithRelationInput, {nullable:true})
    metaData?: MetaDataOrderByWithRelationInput;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    order?: OrderOrderByRelationAggregateInput;

    @Field(() => OrderOrderByRelationAggregateInput, {nullable:true})
    orders?: OrderOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    product?: ProductOrderByRelationAggregateInput;

    @Field(() => SettingsOrderByWithRelationInput, {nullable:true})
    settings?: SettingsOrderByWithRelationInput;

    @Field(() => SettlementOrderByRelationAggregateInput, {nullable:true})
    settlement?: SettlementOrderByRelationAggregateInput;

    @Field(() => ShippingOrderByRelationAggregateInput, {nullable:true})
    shipping?: ShippingOrderByRelationAggregateInput;

    @Field(() => SupplierOrderByRelationAggregateInput, {nullable:true})
    supplier?: SupplierOrderByRelationAggregateInput;

    @Field(() => SupplierOrderByRelationAggregateInput, {nullable:true})
    vendorSupplier?: SupplierOrderByRelationAggregateInput;

    @Field(() => TransactionOrderByRelationAggregateInput, {nullable:true})
    transaction?: TransactionOrderByRelationAggregateInput;

    @Field(() => UsersWalletsOrderByRelationAggregateInput, {nullable:true})
    usersWallets?: UsersWalletsOrderByRelationAggregateInput;

    @Field(() => VisitOrderByRelationAggregateInput, {nullable:true})
    visit?: VisitOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => TrustOrderByWithRelationInput, {nullable:true})
    trust?: TrustOrderByWithRelationInput;
}
