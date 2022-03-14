import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumShippingTypeEnumNullableFilter } from '../prisma/enum-shipping-type-enum-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';

@InputType()
export class ShippingWhereInput {

    @Field(() => [ShippingWhereInput], {nullable:true})
    AND?: Array<ShippingWhereInput>;

    @Field(() => [ShippingWhereInput], {nullable:true})
    OR?: Array<ShippingWhereInput>;

    @Field(() => [ShippingWhereInput], {nullable:true})
    NOT?: Array<ShippingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    company?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address1?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address2?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    city?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    postcode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    longitude?: StringNullableFilter;

    @Field(() => EnumShippingTypeEnumNullableFilter, {nullable:true})
    shippingType?: EnumShippingTypeEnumNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    shippingFee?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    latitude?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    walletId?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isDefault?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    seviVerified?: BoolNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    Order?: OrderListRelationFilter;
}
