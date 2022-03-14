import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumOrderStatusEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-order-status-enum-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumPaymentStatusEnumFieldUpdateOperationsInput } from '../prisma/enum-payment-status-enum-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableEnumOrderPaymentMethodsEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-order-payment-methods-enum-field-update-operations.input';
import { NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-ecommerce-platform-enum-field-update-operations.input';
import { NullableEnumCurrencyEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-currency-enum-field-update-operations.input';

@InputType()
export class OrderUncheckedUpdateManyWithoutOrdersAffiliateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    vendorId?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    billingId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shippingId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput, {nullable:true})
    ecommercePlatform?: NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumCurrencyEnumFieldUpdateOperationsInput, {nullable:true})
    currency?: NullableEnumCurrencyEnumFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    platformId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    customerId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    referenceNumber?: NullableStringFieldUpdateOperationsInput;
}
