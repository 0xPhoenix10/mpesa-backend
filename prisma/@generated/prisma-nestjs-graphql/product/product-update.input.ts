import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableEnumCurrencyEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-currency-enum-field-update-operations.input';
import { NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-ecommerce-platform-enum-field-update-operations.input';
import { UserUpdateOneWithoutProductInput } from '../user/user-update-one-without-product.input';
import { WalletUpdateOneWithoutProductInput } from '../wallet/wallet-update-one-without-product.input';

@InputType()
export class ProductUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    quantity?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    vendorName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    vendorType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    price?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    unitPrice?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    listedPublic?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    gallery?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    categories?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableEnumCurrencyEnumFieldUpdateOperationsInput, {nullable:true})
    currency?: NullableEnumCurrencyEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput, {nullable:true})
    ecommercePlatform?: NullableEnumEcommercePlatformEnumFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    platformId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutProductInput, {nullable:true})
    affiliate?: UserUpdateOneWithoutProductInput;

    @Field(() => WalletUpdateOneWithoutProductInput, {nullable:true})
    vendorWallet?: WalletUpdateOneWithoutProductInput;
}
