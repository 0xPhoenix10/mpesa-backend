import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumWalletTypesEnumFieldUpdateOperationsInput } from '../prisma/enum-wallet-types-enum-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumCurrencyEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-currency-enum-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { AnswerUncheckedUpdateManyWithoutWalletInput } from '../answer/answer-unchecked-update-many-without-wallet.input';
import { BadgeUncheckedUpdateManyWithoutWalletInput } from '../badge/badge-unchecked-update-many-without-wallet.input';
import { BillingUncheckedUpdateManyWithoutWalletInput } from '../billing/billing-unchecked-update-many-without-wallet.input';
import { CreditUncheckedUpdateManyWithoutCreditorInput } from '../credit/credit-unchecked-update-many-without-creditor.input';
import { CreditUncheckedUpdateManyWithoutDebtorInput } from '../credit/credit-unchecked-update-many-without-debtor.input';
import { CreditConfigurationUncheckedUpdateManyWithoutWalletInput } from '../credit-configuration/credit-configuration-unchecked-update-many-without-wallet.input';
import { CustomerUncheckedUpdateManyWithoutCustomerInput } from '../customer/customer-unchecked-update-many-without-customer.input';
import { CustomerUncheckedUpdateManyWithoutVendorInput } from '../customer/customer-unchecked-update-many-without-vendor.input';
import { InstallmentUncheckedUpdateManyWithoutCreditorInput } from '../installment/installment-unchecked-update-many-without-creditor.input';
import { InstallmentUncheckedUpdateManyWithoutDebtorInput } from '../installment/installment-unchecked-update-many-without-debtor.input';
import { MetaDataUncheckedUpdateOneWithoutWalletInput } from '../meta-data/meta-data-unchecked-update-one-without-wallet.input';
import { OrderUncheckedUpdateManyWithoutCustomerInput } from '../order/order-unchecked-update-many-without-customer.input';
import { OrderUncheckedUpdateManyWithoutVendorWalletInput } from '../order/order-unchecked-update-many-without-vendor-wallet.input';
import { ProductUncheckedUpdateManyWithoutVendorWalletInput } from '../product/product-unchecked-update-many-without-vendor-wallet.input';
import { SettingsUncheckedUpdateOneWithoutWalletInput } from '../settings/settings-unchecked-update-one-without-wallet.input';
import { SettlementUncheckedUpdateManyWithoutWalletInput } from '../settlement/settlement-unchecked-update-many-without-wallet.input';
import { ShippingUncheckedUpdateManyWithoutWalletInput } from '../shipping/shipping-unchecked-update-many-without-wallet.input';
import { SupplierUncheckedUpdateManyWithoutSupplierInput } from '../supplier/supplier-unchecked-update-many-without-supplier.input';
import { SupplierUncheckedUpdateManyWithoutVendorInput } from '../supplier/supplier-unchecked-update-many-without-vendor.input';
import { TransactionUncheckedUpdateManyWithoutWalletInput } from '../transaction/transaction-unchecked-update-many-without-wallet.input';
import { UsersWalletsUncheckedUpdateManyWithoutWalletInput } from '../users-wallets/users-wallets-unchecked-update-many-without-wallet.input';
import { UserUncheckedUpdateManyWithoutWalletsInput } from '../user/user-unchecked-update-many-without-wallets.input';
import { TrustUncheckedUpdateOneWithoutWalletInput } from '../trust/trust-unchecked-update-one-without-wallet.input';

@InputType()
export class WalletUncheckedUpdateWithoutVisitInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    category?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumWalletTypesEnumFieldUpdateOperationsInput, {nullable:true})
    type?: EnumWalletTypesEnumFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    balance?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    account?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableEnumCurrencyEnumFieldUpdateOperationsInput, {nullable:true})
    currency?: NullableEnumCurrencyEnumFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    settlementAutomatic?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    settlementDefaultId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    verificationStartedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shippingId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    picture?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AnswerUncheckedUpdateManyWithoutWalletInput, {nullable:true})
    answers?: AnswerUncheckedUpdateManyWithoutWalletInput;

    @Field(() => BadgeUncheckedUpdateManyWithoutWalletInput, {nullable:true})
    badges?: BadgeUncheckedUpdateManyWithoutWalletInput;

    @Field(() => BillingUncheckedUpdateManyWithoutWalletInput, {nullable:true})
    billing?: BillingUncheckedUpdateManyWithoutWalletInput;

    @Field(() => CreditUncheckedUpdateManyWithoutCreditorInput, {nullable:true})
    creditorCredit?: CreditUncheckedUpdateManyWithoutCreditorInput;

    @Field(() => CreditUncheckedUpdateManyWithoutDebtorInput, {nullable:true})
    debtorCredit?: CreditUncheckedUpdateManyWithoutDebtorInput;

    @Field(() => CreditConfigurationUncheckedUpdateManyWithoutWalletInput, {nullable:true})
    creditConfigurations?: CreditConfigurationUncheckedUpdateManyWithoutWalletInput;

    @Field(() => CustomerUncheckedUpdateManyWithoutCustomerInput, {nullable:true})
    customer?: CustomerUncheckedUpdateManyWithoutCustomerInput;

    @Field(() => CustomerUncheckedUpdateManyWithoutVendorInput, {nullable:true})
    vendor?: CustomerUncheckedUpdateManyWithoutVendorInput;

    @Field(() => InstallmentUncheckedUpdateManyWithoutCreditorInput, {nullable:true})
    creditorInstallments?: InstallmentUncheckedUpdateManyWithoutCreditorInput;

    @Field(() => InstallmentUncheckedUpdateManyWithoutDebtorInput, {nullable:true})
    debtorInstallments?: InstallmentUncheckedUpdateManyWithoutDebtorInput;

    @Field(() => MetaDataUncheckedUpdateOneWithoutWalletInput, {nullable:true})
    metaData?: MetaDataUncheckedUpdateOneWithoutWalletInput;

    @Field(() => OrderUncheckedUpdateManyWithoutCustomerInput, {nullable:true})
    order?: OrderUncheckedUpdateManyWithoutCustomerInput;

    @Field(() => OrderUncheckedUpdateManyWithoutVendorWalletInput, {nullable:true})
    orders?: OrderUncheckedUpdateManyWithoutVendorWalletInput;

    @Field(() => ProductUncheckedUpdateManyWithoutVendorWalletInput, {nullable:true})
    product?: ProductUncheckedUpdateManyWithoutVendorWalletInput;

    @Field(() => SettingsUncheckedUpdateOneWithoutWalletInput, {nullable:true})
    settings?: SettingsUncheckedUpdateOneWithoutWalletInput;

    @Field(() => SettlementUncheckedUpdateManyWithoutWalletInput, {nullable:true})
    settlement?: SettlementUncheckedUpdateManyWithoutWalletInput;

    @Field(() => ShippingUncheckedUpdateManyWithoutWalletInput, {nullable:true})
    shipping?: ShippingUncheckedUpdateManyWithoutWalletInput;

    @Field(() => SupplierUncheckedUpdateManyWithoutSupplierInput, {nullable:true})
    supplier?: SupplierUncheckedUpdateManyWithoutSupplierInput;

    @Field(() => SupplierUncheckedUpdateManyWithoutVendorInput, {nullable:true})
    vendorSupplier?: SupplierUncheckedUpdateManyWithoutVendorInput;

    @Field(() => TransactionUncheckedUpdateManyWithoutWalletInput, {nullable:true})
    transaction?: TransactionUncheckedUpdateManyWithoutWalletInput;

    @Field(() => UsersWalletsUncheckedUpdateManyWithoutWalletInput, {nullable:true})
    usersWallets?: UsersWalletsUncheckedUpdateManyWithoutWalletInput;

    @Field(() => UserUncheckedUpdateManyWithoutWalletsInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutWalletsInput;

    @Field(() => TrustUncheckedUpdateOneWithoutWalletInput, {nullable:true})
    trust?: TrustUncheckedUpdateOneWithoutWalletInput;
}
