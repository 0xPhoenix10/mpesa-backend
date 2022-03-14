import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeType } from './badge-type.enum';

@InputType()
export class NestedEnumBadgeTypeNullableFilter {

    @Field(() => BadgeType, {nullable:true})
    equals?: keyof typeof BadgeType;

    @Field(() => [BadgeType], {nullable:true})
    in?: Array<keyof typeof BadgeType>;

    @Field(() => [BadgeType], {nullable:true})
    notIn?: Array<keyof typeof BadgeType>;

    @Field(() => NestedEnumBadgeTypeNullableFilter, {nullable:true})
    not?: NestedEnumBadgeTypeNullableFilter;
}
