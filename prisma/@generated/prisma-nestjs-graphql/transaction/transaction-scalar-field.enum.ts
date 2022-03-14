import { registerEnumType } from '@nestjs/graphql';

export enum TransactionScalarFieldEnum {
    id = "id",
    amount = "amount",
    fee = "fee",
    totalAmount = "totalAmount",
    description = "description",
    paymentType = "paymentType",
    paymentTypeId = "paymentTypeId",
    currency = "currency",
    transactionType = "transactionType",
    method = "method",
    walletId = "walletId",
    createdAt = "createdAt",
    name = "name",
    balanceAfter = "balanceAfter",
    balanceBefore = "balanceBefore"
}


registerEnumType(TransactionScalarFieldEnum, { name: 'TransactionScalarFieldEnum', description: undefined })
