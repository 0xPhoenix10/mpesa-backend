import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { phaseEnum } from './phase.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumphaseEnumNullableFilter } from './nested-enumphase-enum-nullable-filter.input';

@InputType()
export class NestedEnumphaseEnumNullableWithAggregatesFilter {

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
