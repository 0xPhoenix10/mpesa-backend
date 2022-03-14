import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeType } from './badge-type.enum';
import { NestedEnumBadgeTypeNullableFilter } from './nested-enum-badge-type-nullable-filter.input';

@InputType()
export class EnumBadgeTypeNullableFilter {

    @Field(() => BadgeType, {nullable:true})
    equals?: keyof typeof BadgeType;

    @Field(() => [BadgeType], {nullable:true})
    in?: Array<keyof typeof BadgeType>;

    @Field(() => [BadgeType], {nullable:true})
    notIn?: Array<keyof typeof BadgeType>;

    @Field(() => NestedEnumBadgeTypeNullableFilter, {nullable:true})
    not?: NestedEnumBadgeTypeNullableFilter;
}
