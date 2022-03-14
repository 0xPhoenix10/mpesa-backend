import { registerEnumType } from '@nestjs/graphql';

export enum WalletScalarFieldEnum {
    id = "id",
    name = "name",
    category = "category",
    type = "type",
    balance = "balance",
    account = "account",
    createdAt = "createdAt",
    currency = "currency",
    settlementAutomatic = "settlementAutomatic",
    settlementDefaultId = "settlementDefaultId",
    verificationStartedAt = "verificationStartedAt",
    shippingId = "shippingId",
    picture = "picture"
}


registerEnumType(WalletScalarFieldEnum, { name: 'WalletScalarFieldEnum', description: undefined })
