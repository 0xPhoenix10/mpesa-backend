import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingTypeEnum } from './shipping-type.enum';
import { NestedEnumShippingTypeEnumNullableFilter } from './nested-enum-shipping-type-enum-nullable-filter.input';

@InputType()
export class EnumShippingTypeEnumNullableFilter {

    @Field(() => ShippingTypeEnum, {nullable:true})
    equals?: keyof typeof ShippingTypeEnum;

    @Field(() => [ShippingTypeEnum], {nullable:true})
    in?: Array<keyof typeof ShippingTypeEnum>;

    @Field(() => [ShippingTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof ShippingTypeEnum>;

    @Field(() => NestedEnumShippingTypeEnumNullableFilter, {nullable:true})
    not?: NestedEnumShippingTypeEnumNullableFilter;
}
