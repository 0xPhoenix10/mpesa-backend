import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderPaymentMethodsEnum } from './order-payment-methods.enum';
import { NestedEnumOrderPaymentMethodsEnumNullableWithAggregatesFilter } from './nested-enum-order-payment-methods-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumOrderPaymentMethodsEnumNullableFilter } from './nested-enum-order-payment-methods-enum-nullable-filter.input';

@InputType()
export class EnumOrderPaymentMethodsEnumNullableWithAggregatesFilter {

    @Field(() => OrderPaymentMethodsEnum, {nullable:true})
    equals?: keyof typeof OrderPaymentMethodsEnum;

    @Field(() => [OrderPaymentMethodsEnum], {nullable:true})
    in?: Array<keyof typeof OrderPaymentMethodsEnum>;

    @Field(() => [OrderPaymentMethodsEnum], {nullable:true})
    notIn?: Array<keyof typeof OrderPaymentMethodsEnum>;

    @Field(() => NestedEnumOrderPaymentMethodsEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOrderPaymentMethodsEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumOrderPaymentMethodsEnumNullableFilter, {nullable:true})
    _min?: NestedEnumOrderPaymentMethodsEnumNullableFilter;

    @Field(() => NestedEnumOrderPaymentMethodsEnumNullableFilter, {nullable:true})
    _max?: NestedEnumOrderPaymentMethodsEnumNullableFilter;
}
