import { registerEnumType } from '@nestjs/graphql';

export enum PaymentTypesEnum {
    CREDIT = "CREDIT",
    ORDER = "ORDER",
    WALLET = "WALLET",
    MPESA_EXPRESS_PAYMENT = "MPESA_EXPRESS_PAYMENT",
    MONEY_REQUEST = "MONEY_REQUEST"
}


registerEnumType(PaymentTypesEnum, { name: 'PaymentTypesEnum', description: undefined })
