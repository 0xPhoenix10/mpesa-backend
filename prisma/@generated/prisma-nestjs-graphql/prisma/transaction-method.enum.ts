import { registerEnumType } from '@nestjs/graphql';

export enum TransactionMethodEnum {
    SEVI = "SEVI",
    MPESA_HOOK = "MPESA_HOOK",
    CREDIT = "CREDIT",
    MPESA = "MPESA",
    LOAD = "LOAD",
    BANK_KENYA = "BANK_KENYA",
    BEYONIC_HOOK = "BEYONIC_HOOK",
    KES_BANK = "KES_BANK",
    KES_MPESA_PAYBILL = "KES_MPESA_PAYBILL",
    KES_MPESA_PHONENUMBER = "KES_MPESA_PHONENUMBER",
    UGX_BANK = "UGX_BANK"
}


registerEnumType(TransactionMethodEnum, { name: 'TransactionMethodEnum', description: undefined })
