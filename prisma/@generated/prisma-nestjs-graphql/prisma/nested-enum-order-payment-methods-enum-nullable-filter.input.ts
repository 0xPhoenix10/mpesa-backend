import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderPaymentMethodsEnum } from './order-payment-methods.enum';

@InputType()
export class NestedEnumOrderPaymentMethodsEnumNullableFilter {

    @Field(() => OrderPaymentMethodsEnum, {nullable:true})
    equals?: keyof typeof OrderPaymentMethodsEnum;

    @Field(() => [OrderPaymentMethodsEnum], {nullable:true})
    in?: Array<keyof typeof OrderPaymentMethodsEnum>;

    @Field(() => [OrderPaymentMethodsEnum], {nullable:true})
    notIn?: Array<keyof typeof OrderPaymentMethodsEnum>;

    @Field(() => NestedEnumOrderPaymentMethodsEnumNullableFilter, {nullable:true})
    not?: NestedEnumOrderPaymentMethodsEnumNullableFilter;
}
