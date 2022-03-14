import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingTypeEnum } from './shipping-type.enum';

@InputType()
export class NestedEnumShippingTypeEnumNullableFilter {

    @Field(() => ShippingTypeEnum, {nullable:true})
    equals?: keyof typeof ShippingTypeEnum;

    @Field(() => [ShippingTypeEnum], {nullable:true})
    in?: Array<keyof typeof ShippingTypeEnum>;

    @Field(() => [ShippingTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof ShippingTypeEnum>;

    @Field(() => NestedEnumShippingTypeEnumNullableFilter, {nullable:true})
    not?: NestedEnumShippingTypeEnumNullableFilter;
}
