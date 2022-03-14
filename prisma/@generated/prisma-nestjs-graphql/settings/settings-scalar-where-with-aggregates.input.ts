import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SettingsScalarWhereWithAggregatesInput {

    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SettingsScalarWhereWithAggregatesInput>;

    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SettingsScalarWhereWithAggregatesInput>;

    @Field(() => [SettingsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SettingsScalarWhereWithAggregatesInput>;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    woocommerceUrl?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    woocommerceConsumerKey?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    woocommerceActive?: BoolNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    woocommerceConsumerSecret?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    walletAccount?: StringWithAggregatesFilter;
}
