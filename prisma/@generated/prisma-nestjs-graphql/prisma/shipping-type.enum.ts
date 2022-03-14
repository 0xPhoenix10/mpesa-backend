import { registerEnumType } from '@nestjs/graphql';

export enum ShippingTypeEnum {
    SEND = "SEND",
    PICKUP = "PICKUP"
}


registerEnumType(ShippingTypeEnum, { name: 'ShippingTypeEnum', description: undefined })
