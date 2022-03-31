import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumBadgeTypeNullableFilter } from '../prisma/enum-badge-type-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';

@InputType()
export class BadgeWhereInput {

    @Field(() => [BadgeWhereInput], {nullable:true})
    AND?: Array<BadgeWhereInput>;

    @Field(() => [BadgeWhereInput], {nullable:true})
    OR?: Array<BadgeWhereInput>;

    @Field(() => [BadgeWhereInput], {nullable:true})
    NOT?: Array<BadgeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    account?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    active?: BoolNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => EnumBadgeTypeNullableFilter, {nullable:true})
    type?: EnumBadgeTypeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    count?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    level?: IntNullableFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;
}
