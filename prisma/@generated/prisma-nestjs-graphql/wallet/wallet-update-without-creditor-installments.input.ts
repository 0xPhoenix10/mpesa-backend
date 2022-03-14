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
import { SettlementUpdateOneWithoutWalletInput } from '../settlement/settlement-update-one-without-wallet.input';
import { AnswerUpdateManyWithoutWalletInput } from '../answer/answer-update-many-without-wallet.input';
import { BadgeUpdateManyWithoutWalletInput } from '../badge/badge-update-many-without-wallet.input';
import { BillingUpdateManyWithoutWalletInput } from '../billing/billing-update-many-without-wallet.input';
import { CreditUpdateManyWithoutCreditorInput } from '../credit/credit-update-many-without-creditor.input';
import { CreditUpdateManyWithoutDebtorInput } from '../credit/credit-update-many-without-debtor.input';
import { CreditConfigurationUpdateManyWithoutWalletInput } from '../credit-configuration/credit-configuration-update-many-without-wallet.input';
import { CustomerUpdateManyWithoutCustomerInput } from '../customer/customer-update-many-without-customer.input';
import { CustomerUpdateManyWithoutVendorInput } from '../customer/customer-update-many-without-vendor.input';
import { InstallmentUpdateManyWithoutDebtorInput } from '../installment/installment-update-many-without-debtor.input';
import { MetaDataUpdateOneWithoutWalletInput } from '../meta-data/meta-data-update-one-without-wallet.input';
import { OrderUpdateManyWithoutCustomerInput } from '../order/order-update-many-without-customer.input';
import { OrderUpdateManyWithoutVendorWalletInput } from '../order/order-update-many-without-vendor-wallet.input';
import { ProductUpdateManyWithoutVendorWalletInput } from '../product/product-update-many-without-vendor-wallet.input';
import { SettingsUpdateOneWithoutWalletInput } from '../settings/settings-update-one-without-wallet.input';
import { SettlementUpdateManyWithoutWalletInput } from '../settlement/settlement-update-many-without-wallet.input';
import { ShippingUpdateManyWithoutWalletInput } from '../shipping/shipping-update-many-without-wallet.input';
import { SupplierUpdateManyWithoutSupplierInput } from '../supplier/supplier-update-many-without-supplier.input';
import { SupplierUpdateManyWithoutVendorInput } from '../supplier/supplier-update-many-without-vendor.input';
import { TransactionUpdateManyWithoutWalletInput } from '../transaction/transaction-update-many-without-wallet.input';
import { UsersWalletsUpdateManyWithoutWalletInput } from '../users-wallets/users-wallets-update-many-without-wallet.input';
import { VisitUpdateManyWithoutWalletInput } from '../visit/visit-update-many-without-wallet.input';
import { UserUpdateManyWithoutWalletsInput } from '../user/user-update-many-without-wallets.input';
import { TrustUpdateOneWithoutWalletInput } from '../trust/trust-update-one-without-wallet.input';

@InputType()
export class WalletUpdateWithoutCreditorInstallmentsInput {

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

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    verificationStartedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shippingId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    picture?: NullableStringFieldUpdateOperationsInput;

    @Field(() => SettlementUpdateOneWithoutWalletInput, {nullable:true})
    settlementDefault?: SettlementUpdateOneWithoutWalletInput;

    @Field(() => AnswerUpdateManyWithoutWalletInput, {nullable:true})
    answers?: AnswerUpdateManyWithoutWalletInput;

    @Field(() => BadgeUpdateManyWithoutWalletInput, {nullable:true})
    badges?: BadgeUpdateManyWithoutWalletInput;

    @Field(() => BillingUpdateManyWithoutWalletInput, {nullable:true})
    billing?: BillingUpdateManyWithoutWalletInput;

    @Field(() => CreditUpdateManyWithoutCreditorInput, {nullable:true})
    creditorCredit?: CreditUpdateManyWithoutCreditorInput;

    @Field(() => CreditUpdateManyWithoutDebtorInput, {nullable:true})
    debtorCredit?: CreditUpdateManyWithoutDebtorInput;

    @Field(() => CreditConfigurationUpdateManyWithoutWalletInput, {nullable:true})
    creditConfigurations?: CreditConfigurationUpdateManyWithoutWalletInput;

    @Field(() => CustomerUpdateManyWithoutCustomerInput, {nullable:true})
    customer?: CustomerUpdateManyWithoutCustomerInput;

    @Field(() => CustomerUpdateManyWithoutVendorInput, {nullable:true})
    vendor?: CustomerUpdateManyWithoutVendorInput;

    @Field(() => InstallmentUpdateManyWithoutDebtorInput, {nullable:true})
    debtorInstallments?: InstallmentUpdateManyWithoutDebtorInput;

    @Field(() => MetaDataUpdateOneWithoutWalletInput, {nullable:true})
    metaData?: MetaDataUpdateOneWithoutWalletInput;

    @Field(() => OrderUpdateManyWithoutCustomerInput, {nullable:true})
    order?: OrderUpdateManyWithoutCustomerInput;

    @Field(() => OrderUpdateManyWithoutVendorWalletInput, {nullable:true})
    orders?: OrderUpdateManyWithoutVendorWalletInput;

    @Field(() => ProductUpdateManyWithoutVendorWalletInput, {nullable:true})
    product?: ProductUpdateManyWithoutVendorWalletInput;

    @Field(() => SettingsUpdateOneWithoutWalletInput, {nullable:true})
    settings?: SettingsUpdateOneWithoutWalletInput;

    @Field(() => SettlementUpdateManyWithoutWalletInput, {nullable:true})
    settlement?: SettlementUpdateManyWithoutWalletInput;

    @Field(() => ShippingUpdateManyWithoutWalletInput, {nullable:true})
    shipping?: ShippingUpdateManyWithoutWalletInput;

    @Field(() => SupplierUpdateManyWithoutSupplierInput, {nullable:true})
    supplier?: SupplierUpdateManyWithoutSupplierInput;

    @Field(() => SupplierUpdateManyWithoutVendorInput, {nullable:true})
    vendorSupplier?: SupplierUpdateManyWithoutVendorInput;

    @Field(() => TransactionUpdateManyWithoutWalletInput, {nullable:true})
    transaction?: TransactionUpdateManyWithoutWalletInput;

    @Field(() => UsersWalletsUpdateManyWithoutWalletInput, {nullable:true})
    usersWallets?: UsersWalletsUpdateManyWithoutWalletInput;

    @Field(() => VisitUpdateManyWithoutWalletInput, {nullable:true})
    visit?: VisitUpdateManyWithoutWalletInput;

    @Field(() => UserUpdateManyWithoutWalletsInput, {nullable:true})
    users?: UserUpdateManyWithoutWalletsInput;

    @Field(() => TrustUpdateOneWithoutWalletInput, {nullable:true})
    trust?: TrustUpdateOneWithoutWalletInput;
}
