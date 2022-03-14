import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';

@InputType()
export class SettingsWhereInput {

    @Field(() => [SettingsWhereInput], {nullable:true})
    AND?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    OR?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    NOT?: Array<SettingsWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    woocommerceUrl?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    woocommerceConsumerKey?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    woocommerceActive?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    woocommerceConsumerSecret?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    walletAccount?: StringFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;
}
