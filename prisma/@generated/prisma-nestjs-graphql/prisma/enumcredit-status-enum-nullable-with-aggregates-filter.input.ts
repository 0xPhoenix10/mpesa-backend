import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { creditStatusEnum } from './credit-status.enum';
import { NestedEnumcreditStatusEnumNullableWithAggregatesFilter } from './nested-enumcredit-status-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumcreditStatusEnumNullableFilter } from './nested-enumcredit-status-enum-nullable-filter.input';

@InputType()
export class EnumcreditStatusEnumNullableWithAggregatesFilter {

    @Field(() => creditStatusEnum, {nullable:true})
    equals?: keyof typeof creditStatusEnum;

    @Field(() => [creditStatusEnum], {nullable:true})
    in?: Array<keyof typeof creditStatusEnum>;

    @Field(() => [creditStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof creditStatusEnum>;

    @Field(() => NestedEnumcreditStatusEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumcreditStatusEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumcreditStatusEnumNullableFilter, {nullable:true})
    _min?: NestedEnumcreditStatusEnumNullableFilter;

    @Field(() => NestedEnumcreditStatusEnumNullableFilter, {nullable:true})
    _max?: NestedEnumcreditStatusEnumNullableFilter;
}
