import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { installmentStatusTypeEnum } from './installment-status-type.enum';
import { NestedEnuminstallmentStatusTypeEnumNullableWithAggregatesFilter } from './nested-enuminstallment-status-type-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnuminstallmentStatusTypeEnumNullableFilter } from './nested-enuminstallment-status-type-enum-nullable-filter.input';

@InputType()
export class EnuminstallmentStatusTypeEnumNullableWithAggregatesFilter {

    @Field(() => installmentStatusTypeEnum, {nullable:true})
    equals?: keyof typeof installmentStatusTypeEnum;

    @Field(() => [installmentStatusTypeEnum], {nullable:true})
    in?: Array<keyof typeof installmentStatusTypeEnum>;

    @Field(() => [installmentStatusTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof installmentStatusTypeEnum>;

    @Field(() => NestedEnuminstallmentStatusTypeEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnuminstallmentStatusTypeEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnuminstallmentStatusTypeEnumNullableFilter, {nullable:true})
    _min?: NestedEnuminstallmentStatusTypeEnumNullableFilter;

    @Field(() => NestedEnuminstallmentStatusTypeEnumNullableFilter, {nullable:true})
    _max?: NestedEnuminstallmentStatusTypeEnumNullableFilter;
}
