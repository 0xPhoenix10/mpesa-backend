import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatusEnum } from './order-status.enum';
import { NestedEnumOrderStatusEnumNullableFilter } from './nested-enum-order-status-enum-nullable-filter.input';

@InputType()
export class EnumOrderStatusEnumNullableFilter {

    @Field(() => OrderStatusEnum, {nullable:true})
    equals?: keyof typeof OrderStatusEnum;

    @Field(() => [OrderStatusEnum], {nullable:true})
    in?: Array<keyof typeof OrderStatusEnum>;

    @Field(() => [OrderStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof OrderStatusEnum>;

    @Field(() => NestedEnumOrderStatusEnumNullableFilter, {nullable:true})
    not?: NestedEnumOrderStatusEnumNullableFilter;
}
