import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingTypeEnum } from './shipping-type.enum';

@InputType()
export class NullableEnumShippingTypeEnumFieldUpdateOperationsInput {

    @Field(() => ShippingTypeEnum, {nullable:true})
    set?: keyof typeof ShippingTypeEnum;
}
