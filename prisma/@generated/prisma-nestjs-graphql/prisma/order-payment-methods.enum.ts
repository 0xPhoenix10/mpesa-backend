import { registerEnumType } from '@nestjs/graphql';

export enum OrderPaymentMethodsEnum {
    SEVI_WALLET = "SEVI_WALLET",
    INSTALLMENTS = "INSTALLMENTS",
    CASH_ON_DELIVERY = "CASH_ON_DELIVERY",
    INSTALLMENTS_MPESA = "INSTALLMENTS_MPESA"
}


registerEnumType(OrderPaymentMethodsEnum, { name: 'OrderPaymentMethodsEnum', description: undefined })
