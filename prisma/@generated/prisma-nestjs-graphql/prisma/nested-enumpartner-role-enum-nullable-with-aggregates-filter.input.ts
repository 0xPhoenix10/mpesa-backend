import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { partnerRoleEnum } from './partner-role.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumpartnerRoleEnumNullableFilter } from './nested-enumpartner-role-enum-nullable-filter.input';

@InputType()
export class NestedEnumpartnerRoleEnumNullableWithAggregatesFilter {

    @Field(() => partnerRoleEnum, {nullable:true})
    equals?: keyof typeof partnerRoleEnum;

    @Field(() => [partnerRoleEnum], {nullable:true})
    in?: Array<keyof typeof partnerRoleEnum>;

    @Field(() => [partnerRoleEnum], {nullable:true})
    notIn?: Array<keyof typeof partnerRoleEnum>;

    @Field(() => NestedEnumpartnerRoleEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumpartnerRoleEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumpartnerRoleEnumNullableFilter, {nullable:true})
    _min?: NestedEnumpartnerRoleEnumNullableFilter;

    @Field(() => NestedEnumpartnerRoleEnumNullableFilter, {nullable:true})
    _max?: NestedEnumpartnerRoleEnumNullableFilter;
}
