import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';

@InputType()
export class BillingWhereInput {

    @Field(() => [BillingWhereInput], {nullable:true})
    AND?: Array<BillingWhereInput>;

    @Field(() => [BillingWhereInput], {nullable:true})
    OR?: Array<BillingWhereInput>;

    @Field(() => [BillingWhereInput], {nullable:true})
    NOT?: Array<BillingWhereInput>;

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
    phoneNumber?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    walletId?: StringNullableFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    order?: OrderListRelationFilter;
}
