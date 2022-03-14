import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenderEnum } from './gender.enum';
import { NestedEnumGenderEnumNullableWithAggregatesFilter } from './nested-enum-gender-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumGenderEnumNullableFilter } from './nested-enum-gender-enum-nullable-filter.input';

@InputType()
export class EnumGenderEnumNullableWithAggregatesFilter {

    @Field(() => GenderEnum, {nullable:true})
    equals?: keyof typeof GenderEnum;

    @Field(() => [GenderEnum], {nullable:true})
    in?: Array<keyof typeof GenderEnum>;

    @Field(() => [GenderEnum], {nullable:true})
    notIn?: Array<keyof typeof GenderEnum>;

    @Field(() => NestedEnumGenderEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGenderEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumGenderEnumNullableFilter, {nullable:true})
    _min?: NestedEnumGenderEnumNullableFilter;

    @Field(() => NestedEnumGenderEnumNullableFilter, {nullable:true})
    _max?: NestedEnumGenderEnumNullableFilter;
}
