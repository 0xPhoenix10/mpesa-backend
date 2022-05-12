import { registerEnumType } from '@nestjs/graphql';

export enum CreditScalarFieldEnum {
    id = "id",
    typeId = "typeId",
    currency = "currency",
    orderId = "orderId",
    type = "type",
    amount = "amount",
    debtorId = "debtorId",
    creditorId = "creditorId",
    installmentsCount = "installmentsCount",
    installmentsCountPaid = "installmentsCountPaid",
    status = "status",
    description = "description",
    totalPaid = "totalPaid",
    totalToPay = "totalToPay",
    agreedDate = "agreedDate",
    userId = "userId",
    createdAt = "createdAt",
    referenceNumber = "referenceNumber",
    creditConfigurationId = "creditConfigurationId",
    endDate = "endDate",
    paidAt = "paidAt",
    duration = "duration",
    durationSlices = "durationSlices",
    affiliateId = "affiliateId",
    defaultAt = "defaultAt",
    fundUpfrontAmount = "fundUpfrontAmount",
    orderWalletId = "orderWalletId",
    fundFeesAmount = "fundFeesAmount",
    amountWithFees = "amountWithFees",
    payNowAmount = "payNowAmount",
    seviFeesAmount = "seviFeesAmount",
    orderWalletShareFeesAmount = "orderWalletShareFeesAmount",
    fundPostDeliveryAmount = "fundPostDeliveryAmount",
    payLaterAmount = "payLaterAmount"
}


registerEnumType(CreditScalarFieldEnum, { name: 'CreditScalarFieldEnum', description: undefined })
