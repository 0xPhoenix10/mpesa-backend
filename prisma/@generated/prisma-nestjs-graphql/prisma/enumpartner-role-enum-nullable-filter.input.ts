import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { partnerRoleEnum } from './partner-role.enum';
import { NestedEnumpartnerRoleEnumNullableFilter } from './nested-enumpartner-role-enum-nullable-filter.input';

@InputType()
export class EnumpartnerRoleEnumNullableFilter {

    @Field(() => partnerRoleEnum, {nullable:true})
    equals?: keyof typeof partnerRoleEnum;

    @Field(() => [partnerRoleEnum], {nullable:true})
    in?: Array<keyof typeof partnerRoleEnum>;

    @Field(() => [partnerRoleEnum], {nullable:true})
    notIn?: Array<keyof typeof partnerRoleEnum>;

    @Field(() => NestedEnumpartnerRoleEnumNullableFilter, {nullable:true})
    not?: NestedEnumpartnerRoleEnumNullableFilter;
}
