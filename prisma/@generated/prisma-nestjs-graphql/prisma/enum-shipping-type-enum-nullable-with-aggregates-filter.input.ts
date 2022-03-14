import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingTypeEnum } from './shipping-type.enum';
import { NestedEnumShippingTypeEnumNullableWithAggregatesFilter } from './nested-enum-shipping-type-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumShippingTypeEnumNullableFilter } from './nested-enum-shipping-type-enum-nullable-filter.input';

@InputType()
export class EnumShippingTypeEnumNullableWithAggregatesFilter {

    @Field(() => ShippingTypeEnum, {nullable:true})
    equals?: keyof typeof ShippingTypeEnum;

    @Field(() => [ShippingTypeEnum], {nullable:true})
    in?: Array<keyof typeof ShippingTypeEnum>;

    @Field(() => [ShippingTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof ShippingTypeEnum>;

    @Field(() => NestedEnumShippingTypeEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumShippingTypeEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumShippingTypeEnumNullableFilter, {nullable:true})
    _min?: NestedEnumShippingTypeEnumNullableFilter;

    @Field(() => NestedEnumShippingTypeEnumNullableFilter, {nullable:true})
    _max?: NestedEnumShippingTypeEnumNullableFilter;
}
