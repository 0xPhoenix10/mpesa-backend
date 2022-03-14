import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatusEnum } from './order-status.enum';

@InputType()
export class NestedEnumOrderStatusEnumNullableFilter {

    @Field(() => OrderStatusEnum, {nullable:true})
    equals?: keyof typeof OrderStatusEnum;

    @Field(() => [OrderStatusEnum], {nullable:true})
    in?: Array<keyof typeof OrderStatusEnum>;

    @Field(() => [OrderStatusEnum], {nullable:true})
    notIn?: Array<keyof typeof OrderStatusEnum>;

    @Field(() => NestedEnumOrderStatusEnumNullableFilter, {nullable:true})
    not?: NestedEnumOrderStatusEnumNullableFilter;
}
