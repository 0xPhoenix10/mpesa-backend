import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletTypesEnum } from '../prisma/wallet-types.enum';
import { Float } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';
import { SettlementCreateNestedOneWithoutWalletInput } from '../settlement/settlement-create-nested-one-without-wallet.input';
import { AnswerCreateNestedManyWithoutWalletInput } from '../answer/answer-create-nested-many-without-wallet.input';
import { BadgeCreateNestedManyWithoutWalletInput } from '../badge/badge-create-nested-many-without-wallet.input';
import { BillingCreateNestedManyWithoutWalletInput } from '../billing/billing-create-nested-many-without-wallet.input';
import { CreditCreateNestedManyWithoutCreditorInput } from '../credit/credit-create-nested-many-without-creditor.input';
import { CreditCreateNestedManyWithoutDebtorInput } from '../credit/credit-create-nested-many-without-debtor.input';
import { CreditConfigurationCreateNestedManyWithoutWalletInput } from '../credit-configuration/credit-configuration-create-nested-many-without-wallet.input';
import { CustomerCreateNestedManyWithoutCustomerInput } from '../customer/customer-create-nested-many-without-customer.input';
import { CustomerCreateNestedManyWithoutVendorInput } from '../customer/customer-create-nested-many-without-vendor.input';
import { InstallmentCreateNestedManyWithoutCreditorInput } from '../installment/installment-create-nested-many-without-creditor.input';
import { InstallmentCreateNestedManyWithoutDebtorInput } from '../installment/installment-create-nested-many-without-debtor.input';
import { MetaDataCreateNestedOneWithoutWalletInput } from '../meta-data/meta-data-create-nested-one-without-wallet.input';
import { OrderCreateNestedManyWithoutCustomerInput } from '../order/order-create-nested-many-without-customer.input';
import { ProductCreateNestedManyWithoutVendorWalletInput } from '../product/product-create-nested-many-without-vendor-wallet.input';
import { SettingsCreateNestedOneWithoutWalletInput } from '../settings/settings-create-nested-one-without-wallet.input';
import { SettlementCreateNestedManyWithoutWalletInput } from '../settlement/settlement-create-nested-many-without-wallet.input';
import { ShippingCreateNestedManyWithoutWalletInput } from '../shipping/shipping-create-nested-many-without-wallet.input';
import { SupplierCreateNestedManyWithoutSupplierInput } from '../supplier/supplier-create-nested-many-without-supplier.input';
import { SupplierCreateNestedManyWithoutVendorInput } from '../supplier/supplier-create-nested-many-without-vendor.input';
import { TransactionCreateNestedManyWithoutWalletInput } from '../transaction/transaction-create-nested-many-without-wallet.input';
import { UsersWalletsCreateNestedManyWithoutWalletInput } from '../users-wallets/users-wallets-create-nested-many-without-wallet.input';
import { VisitCreateNestedManyWithoutWalletInput } from '../visit/visit-create-nested-many-without-wallet.input';
import { UserCreateNestedManyWithoutWalletsInput } from '../user/user-create-nested-many-without-wallets.input';
import { TrustCreateNestedOneWithoutWalletInput } from '../trust/trust-create-nested-one-without-wallet.input';

@InputType()
export class WalletCreateWithoutOrdersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => WalletTypesEnum, {nullable:false})
    type!: keyof typeof WalletTypesEnum;

    @Field(() => Float, {nullable:true})
    balance?: number;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => CurrencyEnum, {nullable:true})
    currency?: keyof typeof CurrencyEnum;

    @Field(() => Boolean, {nullable:true})
    settlementAutomatic?: boolean;

    @Field(() => Date, {nullable:true})
    verificationStartedAt?: Date | string;

    @Field(() => String, {nullable:true})
    shippingId?: string;

    @Field(() => String, {nullable:true})
    picture?: string;

    @Field(() => SettlementCreateNestedOneWithoutWalletInput, {nullable:true})
    settlementDefault?: SettlementCreateNestedOneWithoutWalletInput;

    @Field(() => AnswerCreateNestedManyWithoutWalletInput, {nullable:true})
    answers?: AnswerCreateNestedManyWithoutWalletInput;

    @Field(() => BadgeCreateNestedManyWithoutWalletInput, {nullable:true})
    badges?: BadgeCreateNestedManyWithoutWalletInput;

    @Field(() => BillingCreateNestedManyWithoutWalletInput, {nullable:true})
    billing?: BillingCreateNestedManyWithoutWalletInput;

    @Field(() => CreditCreateNestedManyWithoutCreditorInput, {nullable:true})
    creditorCredit?: CreditCreateNestedManyWithoutCreditorInput;

    @Field(() => CreditCreateNestedManyWithoutDebtorInput, {nullable:true})
    debtorCredit?: CreditCreateNestedManyWithoutDebtorInput;

    @Field(() => CreditConfigurationCreateNestedManyWithoutWalletInput, {nullable:true})
    creditConfigurations?: CreditConfigurationCreateNestedManyWithoutWalletInput;

    @Field(() => CustomerCreateNestedManyWithoutCustomerInput, {nullable:true})
    customer?: CustomerCreateNestedManyWithoutCustomerInput;

    @Field(() => CustomerCreateNestedManyWithoutVendorInput, {nullable:true})
    vendor?: CustomerCreateNestedManyWithoutVendorInput;

    @Field(() => InstallmentCreateNestedManyWithoutCreditorInput, {nullable:true})
    creditorInstallments?: InstallmentCreateNestedManyWithoutCreditorInput;

    @Field(() => InstallmentCreateNestedManyWithoutDebtorInput, {nullable:true})
    debtorInstallments?: InstallmentCreateNestedManyWithoutDebtorInput;

    @Field(() => MetaDataCreateNestedOneWithoutWalletInput, {nullable:true})
    metaData?: MetaDataCreateNestedOneWithoutWalletInput;

    @Field(() => OrderCreateNestedManyWithoutCustomerInput, {nullable:true})
    order?: OrderCreateNestedManyWithoutCustomerInput;

    @Field(() => ProductCreateNestedManyWithoutVendorWalletInput, {nullable:true})
    product?: ProductCreateNestedManyWithoutVendorWalletInput;

    @Field(() => SettingsCreateNestedOneWithoutWalletInput, {nullable:true})
    settings?: SettingsCreateNestedOneWithoutWalletInput;

    @Field(() => SettlementCreateNestedManyWithoutWalletInput, {nullable:true})
    settlement?: SettlementCreateNestedManyWithoutWalletInput;

    @Field(() => ShippingCreateNestedManyWithoutWalletInput, {nullable:true})
    shipping?: ShippingCreateNestedManyWithoutWalletInput;

    @Field(() => SupplierCreateNestedManyWithoutSupplierInput, {nullable:true})
    supplier?: SupplierCreateNestedManyWithoutSupplierInput;

    @Field(() => SupplierCreateNestedManyWithoutVendorInput, {nullable:true})
    vendorSupplier?: SupplierCreateNestedManyWithoutVendorInput;

    @Field(() => TransactionCreateNestedManyWithoutWalletInput, {nullable:true})
    transaction?: TransactionCreateNestedManyWithoutWalletInput;

    @Field(() => UsersWalletsCreateNestedManyWithoutWalletInput, {nullable:true})
    usersWallets?: UsersWalletsCreateNestedManyWithoutWalletInput;

    @Field(() => VisitCreateNestedManyWithoutWalletInput, {nullable:true})
    visit?: VisitCreateNestedManyWithoutWalletInput;

    @Field(() => UserCreateNestedManyWithoutWalletsInput, {nullable:true})
    users?: UserCreateNestedManyWithoutWalletsInput;

    @Field(() => TrustCreateNestedOneWithoutWalletInput, {nullable:true})
    trust?: TrustCreateNestedOneWithoutWalletInput;
}
