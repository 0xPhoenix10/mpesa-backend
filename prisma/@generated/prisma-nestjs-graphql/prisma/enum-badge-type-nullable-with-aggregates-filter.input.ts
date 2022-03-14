import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeType } from './badge-type.enum';
import { NestedEnumBadgeTypeNullableWithAggregatesFilter } from './nested-enum-badge-type-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumBadgeTypeNullableFilter } from './nested-enum-badge-type-nullable-filter.input';

@InputType()
export class EnumBadgeTypeNullableWithAggregatesFilter {

    @Field(() => BadgeType, {nullable:true})
    equals?: keyof typeof BadgeType;

    @Field(() => [BadgeType], {nullable:true})
    in?: Array<keyof typeof BadgeType>;

    @Field(() => [BadgeType], {nullable:true})
    notIn?: Array<keyof typeof BadgeType>;

    @Field(() => NestedEnumBadgeTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBadgeTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumBadgeTypeNullableFilter, {nullable:true})
    _min?: NestedEnumBadgeTypeNullableFilter;

    @Field(() => NestedEnumBadgeTypeNullableFilter, {nullable:true})
    _max?: NestedEnumBadgeTypeNullableFilter;
}
