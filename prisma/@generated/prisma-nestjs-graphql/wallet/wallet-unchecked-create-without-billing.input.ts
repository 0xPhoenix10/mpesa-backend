import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletTypesEnum } from '../prisma/wallet-types.enum';
import { Float } from '@nestjs/graphql';
import { CurrencyEnum } from '../prisma/currency.enum';
import { AnswerUncheckedCreateNestedManyWithoutWalletInput } from '../answer/answer-unchecked-create-nested-many-without-wallet.input';
import { BadgeUncheckedCreateNestedManyWithoutWalletInput } from '../badge/badge-unchecked-create-nested-many-without-wallet.input';
import { CreditUncheckedCreateNestedManyWithoutCreditorInput } from '../credit/credit-unchecked-create-nested-many-without-creditor.input';
import { CreditUncheckedCreateNestedManyWithoutDebtorInput } from '../credit/credit-unchecked-create-nested-many-without-debtor.input';
import { CreditConfigurationUncheckedCreateNestedManyWithoutWalletInput } from '../credit-configuration/credit-configuration-unchecked-create-nested-many-without-wallet.input';
import { CustomerUncheckedCreateNestedManyWithoutCustomerInput } from '../customer/customer-unchecked-create-nested-many-without-customer.input';
import { CustomerUncheckedCreateNestedManyWithoutVendorInput } from '../customer/customer-unchecked-create-nested-many-without-vendor.input';
import { InstallmentUncheckedCreateNestedManyWithoutCreditorInput } from '../installment/installment-unchecked-create-nested-many-without-creditor.input';
import { InstallmentUncheckedCreateNestedManyWithoutDebtorInput } from '../installment/installment-unchecked-create-nested-many-without-debtor.input';
import { MetaDataUncheckedCreateNestedOneWithoutWalletInput } from '../meta-data/meta-data-unchecked-create-nested-one-without-wallet.input';
import { OrderUncheckedCreateNestedManyWithoutCustomerInput } from '../order/order-unchecked-create-nested-many-without-customer.input';
import { OrderUncheckedCreateNestedManyWithoutVendorWalletInput } from '../order/order-unchecked-create-nested-many-without-vendor-wallet.input';
import { ProductUncheckedCreateNestedManyWithoutVendorWalletInput } from '../product/product-unchecked-create-nested-many-without-vendor-wallet.input';
import { SettingsUncheckedCreateNestedOneWithoutWalletInput } from '../settings/settings-unchecked-create-nested-one-without-wallet.input';
import { SettlementUncheckedCreateNestedManyWithoutWalletInput } from '../settlement/settlement-unchecked-create-nested-many-without-wallet.input';
import { ShippingUncheckedCreateNestedManyWithoutWalletInput } from '../shipping/shipping-unchecked-create-nested-many-without-wallet.input';
import { SupplierUncheckedCreateNestedManyWithoutSupplierInput } from '../supplier/supplier-unchecked-create-nested-many-without-supplier.input';
import { SupplierUncheckedCreateNestedManyWithoutVendorInput } from '../supplier/supplier-unchecked-create-nested-many-without-vendor.input';
import { TransactionUncheckedCreateNestedManyWithoutWalletInput } from '../transaction/transaction-unchecked-create-nested-many-without-wallet.input';
import { UsersWalletsUncheckedCreateNestedManyWithoutWalletInput } from '../users-wallets/users-wallets-unchecked-create-nested-many-without-wallet.input';
import { VisitUncheckedCreateNestedManyWithoutWalletInput } from '../visit/visit-unchecked-create-nested-many-without-wallet.input';
import { UserUncheckedCreateNestedManyWithoutWalletsInput } from '../user/user-unchecked-create-nested-many-without-wallets.input';
import { TrustUncheckedCreateNestedOneWithoutWalletInput } from '../trust/trust-unchecked-create-nested-one-without-wallet.input';

@InputType()
export class WalletUncheckedCreateWithoutBillingInput {

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

    @Field(() => String, {nullable:true})
    settlementDefaultId?: string;

    @Field(() => Date, {nullable:true})
    verificationStartedAt?: Date | string;

    @Field(() => String, {nullable:true})
    shippingId?: string;

    @Field(() => String, {nullable:true})
    picture?: string;

    @Field(() => AnswerUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    answers?: AnswerUncheckedCreateNestedManyWithoutWalletInput;

    @Field(() => BadgeUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    badges?: BadgeUncheckedCreateNestedManyWithoutWalletInput;

    @Field(() => CreditUncheckedCreateNestedManyWithoutCreditorInput, {nullable:true})
    creditorCredit?: CreditUncheckedCreateNestedManyWithoutCreditorInput;

    @Field(() => CreditUncheckedCreateNestedManyWithoutDebtorInput, {nullable:true})
    debtorCredit?: CreditUncheckedCreateNestedManyWithoutDebtorInput;

    @Field(() => CreditConfigurationUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    creditConfigurations?: CreditConfigurationUncheckedCreateNestedManyWithoutWalletInput;

    @Field(() => CustomerUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    customer?: CustomerUncheckedCreateNestedManyWithoutCustomerInput;

    @Field(() => CustomerUncheckedCreateNestedManyWithoutVendorInput, {nullable:true})
    vendor?: CustomerUncheckedCreateNestedManyWithoutVendorInput;

    @Field(() => InstallmentUncheckedCreateNestedManyWithoutCreditorInput, {nullable:true})
    creditorInstallments?: InstallmentUncheckedCreateNestedManyWithoutCreditorInput;

    @Field(() => InstallmentUncheckedCreateNestedManyWithoutDebtorInput, {nullable:true})
    debtorInstallments?: InstallmentUncheckedCreateNestedManyWithoutDebtorInput;

    @Field(() => MetaDataUncheckedCreateNestedOneWithoutWalletInput, {nullable:true})
    metaData?: MetaDataUncheckedCreateNestedOneWithoutWalletInput;

    @Field(() => OrderUncheckedCreateNestedManyWithoutCustomerInput, {nullable:true})
    order?: OrderUncheckedCreateNestedManyWithoutCustomerInput;

    @Field(() => OrderUncheckedCreateNestedManyWithoutVendorWalletInput, {nullable:true})
    orders?: OrderUncheckedCreateNestedManyWithoutVendorWalletInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutVendorWalletInput, {nullable:true})
    product?: ProductUncheckedCreateNestedManyWithoutVendorWalletInput;

    @Field(() => SettingsUncheckedCreateNestedOneWithoutWalletInput, {nullable:true})
    settings?: SettingsUncheckedCreateNestedOneWithoutWalletInput;

    @Field(() => SettlementUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    settlement?: SettlementUncheckedCreateNestedManyWithoutWalletInput;

    @Field(() => ShippingUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    shipping?: ShippingUncheckedCreateNestedManyWithoutWalletInput;

    @Field(() => SupplierUncheckedCreateNestedManyWithoutSupplierInput, {nullable:true})
    supplier?: SupplierUncheckedCreateNestedManyWithoutSupplierInput;

    @Field(() => SupplierUncheckedCreateNestedManyWithoutVendorInput, {nullable:true})
    vendorSupplier?: SupplierUncheckedCreateNestedManyWithoutVendorInput;

    @Field(() => TransactionUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    transaction?: TransactionUncheckedCreateNestedManyWithoutWalletInput;

    @Field(() => UsersWalletsUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    usersWallets?: UsersWalletsUncheckedCreateNestedManyWithoutWalletInput;

    @Field(() => VisitUncheckedCreateNestedManyWithoutWalletInput, {nullable:true})
    visit?: VisitUncheckedCreateNestedManyWithoutWalletInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutWalletsInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutWalletsInput;

    @Field(() => TrustUncheckedCreateNestedOneWithoutWalletInput, {nullable:true})
    trust?: TrustUncheckedCreateNestedOneWithoutWalletInput;
}
