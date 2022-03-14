import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentStatusEnum } from './payment-status.enum';

@InputType()
export class EnumPaymentStatusEnumFieldUpdateOperationsInput {

    @Field(() => PaymentStatusEnum, {nullable:true})
    set?: keyof typeof PaymentStatusEnum;
}
