import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentTypesEnum } from './payment-types.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPaymentTypesEnumFilter } from './nested-enum-payment-types-enum-filter.input';

@InputType()
export class NestedEnumPaymentTypesEnumWithAggregatesFilter {

    @Field(() => PaymentTypesEnum, {nullable:true})
    equals?: keyof typeof PaymentTypesEnum;

    @Field(() => [PaymentTypesEnum], {nullable:true})
    in?: Array<keyof typeof PaymentTypesEnum>;

    @Field(() => [PaymentTypesEnum], {nullable:true})
    notIn?: Array<keyof typeof PaymentTypesEnum>;

    @Field(() => NestedEnumPaymentTypesEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPaymentTypesEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPaymentTypesEnumFilter, {nullable:true})
    _min?: NestedEnumPaymentTypesEnumFilter;

    @Field(() => NestedEnumPaymentTypesEnumFilter, {nullable:true})
    _max?: NestedEnumPaymentTypesEnumFilter;
}
