import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentStatusEnum } from './payment-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPaymentStatusEnumFilter } from './nested-enum-payment-status-enum-filter.input';

@InputType()
export class NestedEnumPaymentStatusEnumWithAggregatesFilter {

    @Field(() => PaymentStatusEnum, {nullable:true})
    equals?: keyof typeof PaymentStatusEnum;

    @Field(() => [PaymentStatusEnum], {nullable:true})
    in?: Array<keyof typeof PaymentStatusEnum>;

    @Field(() => [PaymentStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof PaymentStatusEnum>;

    @Field(() => NestedEnumPaymentStatusEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPaymentStatusEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPaymentStatusEnumFilter, {nullable:true})
    _min?: NestedEnumPaymentStatusEnumFilter;

    @Field(() => NestedEnumPaymentStatusEnumFilter, {nullable:true})
    _max?: NestedEnumPaymentStatusEnumFilter;
}
