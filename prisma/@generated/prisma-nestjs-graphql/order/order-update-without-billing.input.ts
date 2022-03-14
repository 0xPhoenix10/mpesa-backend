import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableEnumOrderStatusEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-order-status-enum-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumPaymentStatusEnumFieldUpdateOperationsInput } from '../prisma/enum-payment-status-enum-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableEnumOrderPaymentMethodsEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-order-payment-methods-enum-field-update-operations.input';
import { NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-ecommerce-platform-enum-field-update-operations.input';
import { NullableEnumCurrencyEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-currency-enum-field-update-operations.input';
import { UserUpdateOneWithoutOrdersAffiliateInput } from '../user/user-update-one-without-orders-affiliate.input';
import { WalletUpdateOneWithoutOrderInput } from '../wallet/wallet-update-one-without-order.input';
import { ShippingUpdateOneWithoutOrderInput } from '../shipping/shipping-update-one-without-order.input';
import { UserUpdateOneWithoutOrdersInput } from '../user/user-update-one-without-orders.input';
import { WalletUpdateOneWithoutOrdersInput } from '../wallet/wallet-update-one-without-orders.input';
import { CreditUpdateOneWithoutOrderInput } from '../credit/credit-update-one-without-order.input';
import { InstallmentUpdateManyWithoutOrderInput } from '../installment/installment-update-many-without-order.input';
import { CreditRequestUpdateOneWithoutOrderInput } from '../credit-request/credit-request-update-one-without-order.input';

@InputType()
export class OrderUpdateWithoutBillingInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableEnumOrderStatusEnumFieldUpdateOperationsInput, {nullable:true})
    status?: NullableEnumOrderStatusEnumFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    notes?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    products?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    items?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    deliveryCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumPaymentStatusEnumFieldUpdateOperationsInput, {nullable:true})
    paymentStatus?: EnumPaymentStatusEnumFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    amount?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableEnumOrderPaymentMethodsEnumFieldUpdateOperationsInput, {nullable:true})
    paymentMethod?: NullableEnumOrderPaymentMethodsEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput, {nullable:true})
    ecommercePlatform?: NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumCurrencyEnumFieldUpdateOperationsInput, {nullable:true})
    currency?: NullableEnumCurrencyEnumFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    platformId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referenceNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutOrdersAffiliateInput, {nullable:true})
    affiliate?: UserUpdateOneWithoutOrdersAffiliateInput;

    @Field(() => WalletUpdateOneWithoutOrderInput, {nullable:true})
    customer?: WalletUpdateOneWithoutOrderInput;

    @Field(() => ShippingUpdateOneWithoutOrderInput, {nullable:true})
    shipping?: ShippingUpdateOneWithoutOrderInput;

    @Field(() => UserUpdateOneWithoutOrdersInput, {nullable:true})
    user?: UserUpdateOneWithoutOrdersInput;

    @Field(() => WalletUpdateOneWithoutOrdersInput, {nullable:true})
    vendorWallet?: WalletUpdateOneWithoutOrdersInput;

    @Field(() => CreditUpdateOneWithoutOrderInput, {nullable:true})
    credit?: CreditUpdateOneWithoutOrderInput;

    @Field(() => InstallmentUpdateManyWithoutOrderInput, {nullable:true})
    installments?: InstallmentUpdateManyWithoutOrderInput;

    @Field(() => CreditRequestUpdateOneWithoutOrderInput, {nullable:true})
    creditRequest?: CreditRequestUpdateOneWithoutOrderInput;
}
