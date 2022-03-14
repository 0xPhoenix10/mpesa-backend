import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentTypesEnum } from './payment-types.enum';

@InputType()
export class EnumPaymentTypesEnumFieldUpdateOperationsInput {

    @Field(() => PaymentTypesEnum, {nullable:true})
    set?: keyof typeof PaymentTypesEnum;
}
