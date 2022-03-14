import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatusEnum } from './order-status.enum';
import { NestedEnumOrderStatusEnumNullableWithAggregatesFilter } from './nested-enum-order-status-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumOrderStatusEnumNullableFilter } from './nested-enum-order-status-enum-nullable-filter.input';

@InputType()
export class EnumOrderStatusEnumNullableWithAggregatesFilter {

    @Field(() => OrderStatusEnum, {nullable:true})
    equals?: keyof typeof OrderStatusEnum;

    @Field(() => [OrderStatusEnum], {nullable:true})
    in?: Array<keyof typeof OrderStatusEnum>;

    @Field(() => [OrderStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof OrderStatusEnum>;

    @Field(() => NestedEnumOrderStatusEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumOrderStatusEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumOrderStatusEnumNullableFilter, {nullable:true})
    _min?: NestedEnumOrderStatusEnumNullableFilter;

    @Field(() => NestedEnumOrderStatusEnumNullableFilter, {nullable:true})
    _max?: NestedEnumOrderStatusEnumNullableFilter;
}
