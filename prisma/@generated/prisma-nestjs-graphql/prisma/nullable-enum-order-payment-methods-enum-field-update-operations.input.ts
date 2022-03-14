import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderPaymentMethodsEnum } from './order-payment-methods.enum';

@InputType()
export class NullableEnumOrderPaymentMethodsEnumFieldUpdateOperationsInput {

    @Field(() => OrderPaymentMethodsEnum, {nullable:true})
    set?: keyof typeof OrderPaymentMethodsEnum;
}
