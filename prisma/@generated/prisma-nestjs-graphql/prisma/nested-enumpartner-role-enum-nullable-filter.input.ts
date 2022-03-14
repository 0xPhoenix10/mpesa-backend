import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { partnerRoleEnum } from './partner-role.enum';

@InputType()
export class NestedEnumpartnerRoleEnumNullableFilter {

    @Field(() => partnerRoleEnum, {nullable:true})
    equals?: keyof typeof partnerRoleEnum;

    @Field(() => [partnerRoleEnum], {nullable:true})
    in?: Array<keyof typeof partnerRoleEnum>;

    @Field(() => [partnerRoleEnum], {nullable:true})
    notIn?: Array<keyof typeof partnerRoleEnum>;

    @Field(() => NestedEnumpartnerRoleEnumNullableFilter, {nullable:true})
    not?: NestedEnumpartnerRoleEnumNullableFilter;
}
