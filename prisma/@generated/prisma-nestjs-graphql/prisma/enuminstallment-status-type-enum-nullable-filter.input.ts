import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { installmentStatusTypeEnum } from './installment-status-type.enum';
import { NestedEnuminstallmentStatusTypeEnumNullableFilter } from './nested-enuminstallment-status-type-enum-nullable-filter.input';

@InputType()
export class EnuminstallmentStatusTypeEnumNullableFilter {

    @Field(() => installmentStatusTypeEnum, {nullable:true})
    equals?: keyof typeof installmentStatusTypeEnum;

    @Field(() => [installmentStatusTypeEnum], {nullable:true})
    in?: Array<keyof typeof installmentStatusTypeEnum>;

    @Field(() => [installmentStatusTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof installmentStatusTypeEnum>;

    @Field(() => NestedEnuminstallmentStatusTypeEnumNullableFilter, {nullable:true})
    not?: NestedEnuminstallmentStatusTypeEnumNullableFilter;
}
