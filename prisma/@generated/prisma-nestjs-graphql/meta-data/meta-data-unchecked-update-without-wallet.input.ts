import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableEnumphaseEnumFieldUpdateOperationsInput } from '../prisma/nullable-enumphase-enum-field-update-operations.input';
import { NullableEnumpartnerRoleEnumFieldUpdateOperationsInput } from '../prisma/nullable-enumpartner-role-enum-field-update-operations.input';
import { NullableEnumlegalStatusEnumFieldUpdateOperationsInput } from '../prisma/nullable-enumlegal-status-enum-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';

@InputType()
export class MetaDataUncheckedUpdateWithoutWalletInput {

    @Field(() => GraphQLJSON, {nullable:true})
    CRB?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    taxId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    taxName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    seller?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableEnumphaseEnumFieldUpdateOperationsInput, {nullable:true})
    sellerPhase?: NullableEnumphaseEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumphaseEnumFieldUpdateOperationsInput, {nullable:true})
    buyerPhase?: NullableEnumphaseEnumFieldUpdateOperationsInput;

    @Field(() => NullableEnumpartnerRoleEnumFieldUpdateOperationsInput, {nullable:true})
    partnerRole?: NullableEnumpartnerRoleEnumFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentCOI?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentCR12?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentSCF?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentSCA?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentStore?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentKRAcert?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumlegalStatusEnumFieldUpdateOperationsInput, {nullable:true})
    legalStatus?: NullableEnumlegalStatusEnumFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    metaBaseURL?: any;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    buyer?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    maxBuyerOrderAmount?: NullableFloatFieldUpdateOperationsInput;
}
