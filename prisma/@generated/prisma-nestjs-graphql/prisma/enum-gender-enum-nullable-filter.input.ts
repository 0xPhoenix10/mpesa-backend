import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderEnum } from './gender.enum';
import { NestedEnumGenderEnumNullableFilter } from './nested-enum-gender-enum-nullable-filter.input';

@InputType()
export class EnumGenderEnumNullableFilter {

    @Field(() => GenderEnum, {nullable:true})
    equals?: keyof typeof GenderEnum;

    @Field(() => [GenderEnum], {nullable:true})
    in?: Array<keyof typeof GenderEnum>;

    @Field(() => [GenderEnum], {nullable:true})
    notIn?: Array<keyof typeof GenderEnum>;

    @Field(() => NestedEnumGenderEnumNullableFilter, {nullable:true})
    not?: NestedEnumGenderEnumNullableFilter;
}
