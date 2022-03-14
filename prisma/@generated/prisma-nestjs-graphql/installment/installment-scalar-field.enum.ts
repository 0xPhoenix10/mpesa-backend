import { registerEnumType } from '@nestjs/graphql';

export enum InstallmentScalarFieldEnum {
    id = "id",
    installmentCount = "installmentCount",
    startDate = "startDate",
    endDate = "endDate",
    referenceNumber = "referenceNumber",
    amount = "amount",
    debtorId = "debtorId",
    creditorId = "creditorId",
    orderId = "orderId",
    status = "status",
    firstTryFailedAt = "firstTryFailedAt",
    creditId = "creditId",
    createdAt = "createdAt",
    userId = "userId",
    amountWithPenalty = "amountWithPenalty",
    seviFees = "seviFees",
    penalty = "penalty",
    paidAt = "paidAt",
    creditConfigurationId = "creditConfigurationId",
    affiliateFees = "affiliateFees",
    currency = "currency"
}


registerEnumType(InstallmentScalarFieldEnum, { name: 'InstallmentScalarFieldEnum', description: undefined })
