import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatusEnum } from './order-status.enum';

@InputType()
export class NullableEnumOrderStatusEnumFieldUpdateOperationsInput {

    @Field(() => OrderStatusEnum, {nullable:true})
    set?: keyof typeof OrderStatusEnum;
}
