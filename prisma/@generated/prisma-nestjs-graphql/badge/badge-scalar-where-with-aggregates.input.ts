import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumBadgeTypeNullableWithAggregatesFilter } from '../prisma/enum-badge-type-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class BadgeScalarWhereWithAggregatesInput {

    @Field(() => [BadgeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BadgeScalarWhereWithAggregatesInput>;

    @Field(() => [BadgeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BadgeScalarWhereWithAggregatesInput>;

    @Field(() => [BadgeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BadgeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    account?: StringWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    active?: BoolNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumBadgeTypeNullableWithAggregatesFilter, {nullable:true})
    type?: EnumBadgeTypeNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    count?: IntNullableWithAggregatesFilter;
}
