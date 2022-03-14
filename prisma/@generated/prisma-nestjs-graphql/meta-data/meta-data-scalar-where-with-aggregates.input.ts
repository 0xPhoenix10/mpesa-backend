import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { EnumphaseEnumNullableWithAggregatesFilter } from '../prisma/enumphase-enum-nullable-with-aggregates-filter.input';
import { EnumpartnerRoleEnumNullableWithAggregatesFilter } from '../prisma/enumpartner-role-enum-nullable-with-aggregates-filter.input';
import { EnumlegalStatusEnumNullableWithAggregatesFilter } from '../prisma/enumlegal-status-enum-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';

@InputType()
export class MetaDataScalarWhereWithAggregatesInput {

    @Field(() => [MetaDataScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MetaDataScalarWhereWithAggregatesInput>;

    @Field(() => [MetaDataScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MetaDataScalarWhereWithAggregatesInput>;

    @Field(() => [MetaDataScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MetaDataScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    walletAccount?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    CRB?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    taxId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    taxName?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    seller?: BoolNullableWithAggregatesFilter;

    @Field(() => EnumphaseEnumNullableWithAggregatesFilter, {nullable:true})
    sellerPhase?: EnumphaseEnumNullableWithAggregatesFilter;

    @Field(() => EnumphaseEnumNullableWithAggregatesFilter, {nullable:true})
    buyerPhase?: EnumphaseEnumNullableWithAggregatesFilter;

    @Field(() => EnumpartnerRoleEnumNullableWithAggregatesFilter, {nullable:true})
    partnerRole?: EnumpartnerRoleEnumNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentCOI?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentCR12?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentSCF?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentSCA?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentStore?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentKRAcert?: StringNullableWithAggregatesFilter;

    @Field(() => EnumlegalStatusEnumNullableWithAggregatesFilter, {nullable:true})
    legalStatus?: EnumlegalStatusEnumNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    metaBaseURL?: JsonNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    buyer?: BoolNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    maxBuyerOrderAmount?: FloatNullableWithAggregatesFilter;
}
