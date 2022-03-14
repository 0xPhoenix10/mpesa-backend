import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumCurrencyEnumNullableFilter } from '../prisma/enum-currency-enum-nullable-filter.input';
import { EnumEcommercePlatformEnumNullableFilter } from '../prisma/enum-ecommerce-platform-enum-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';

@InputType()
export class ProductWhereInput {

    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    vendorId?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    quantity?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    vendorName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    vendorType?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    price?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    unitPrice?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    gallery?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    categories?: JsonNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => EnumCurrencyEnumNullableFilter, {nullable:true})
    currency?: EnumCurrencyEnumNullableFilter;

    @Field(() => EnumEcommercePlatformEnumNullableFilter, {nullable:true})
    ecommercePlatform?: EnumEcommercePlatformEnumNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    platformId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    affiliateId?: StringNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    affiliate?: UserRelationFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    vendorWallet?: WalletRelationFilter;
}
