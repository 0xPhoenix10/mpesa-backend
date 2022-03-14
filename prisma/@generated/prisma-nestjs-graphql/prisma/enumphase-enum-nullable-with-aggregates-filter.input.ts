import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { phaseEnum } from './phase.enum';
import { NestedEnumphaseEnumNullableWithAggregatesFilter } from './nested-enumphase-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumphaseEnumNullableFilter } from './nested-enumphase-enum-nullable-filter.input';

@InputType()
export class EnumphaseEnumNullableWithAggregatesFilter {

    @Field(() => phaseEnum, {nullable:true})
    equals?: keyof typeof phaseEnum;

    @Field(() => [phaseEnum], {nullable:true})
    in?: Array<keyof typeof phaseEnum>;

    @Field(() => [phaseEnum], {nullable:true})
    notIn?: Array<keyof typeof phaseEnum>;

    @Field(() => NestedEnumphaseEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumphaseEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumphaseEnumNullableFilter, {nullable:true})
    _min?: NestedEnumphaseEnumNullableFilter;

    @Field(() => NestedEnumphaseEnumNullableFilter, {nullable:true})
    _max?: NestedEnumphaseEnumNullableFilter;
}
