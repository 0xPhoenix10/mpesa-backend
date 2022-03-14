import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { EnumphaseEnumNullableFilter } from '../prisma/enumphase-enum-nullable-filter.input';
import { EnumpartnerRoleEnumNullableFilter } from '../prisma/enumpartner-role-enum-nullable-filter.input';
import { EnumlegalStatusEnumNullableFilter } from '../prisma/enumlegal-status-enum-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';

@InputType()
export class MetaDataWhereInput {

    @Field(() => [MetaDataWhereInput], {nullable:true})
    AND?: Array<MetaDataWhereInput>;

    @Field(() => [MetaDataWhereInput], {nullable:true})
    OR?: Array<MetaDataWhereInput>;

    @Field(() => [MetaDataWhereInput], {nullable:true})
    NOT?: Array<MetaDataWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    walletAccount?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    CRB?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    taxId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    taxName?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    seller?: BoolNullableFilter;

    @Field(() => EnumphaseEnumNullableFilter, {nullable:true})
    sellerPhase?: EnumphaseEnumNullableFilter;

    @Field(() => EnumphaseEnumNullableFilter, {nullable:true})
    buyerPhase?: EnumphaseEnumNullableFilter;

    @Field(() => EnumpartnerRoleEnumNullableFilter, {nullable:true})
    partnerRole?: EnumpartnerRoleEnumNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentCOI?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentCR12?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentSCF?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentSCA?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentStore?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentKRAcert?: StringNullableFilter;

    @Field(() => EnumlegalStatusEnumNullableFilter, {nullable:true})
    legalStatus?: EnumlegalStatusEnumNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metaBaseURL?: JsonNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    buyer?: BoolNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    maxBuyerOrderAmount?: FloatNullableFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;
}
