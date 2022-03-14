import { registerEnumType } from '@nestjs/graphql';

export enum CreditConfigurationsWalletsScalarFieldEnum {
    configurationId = "configurationId",
    walletId = "walletId",
    upfrontPercentage = "upfrontPercentage",
    fundFeesPercentage = "fundFeesPercentage",
    maxOrderAmount = "maxOrderAmount",
    maxOutstandingCredit = "maxOutstandingCredit",
    shareFeesPercentage = "shareFeesPercentage",
    postDeliveryPercentage = "postDeliveryPercentage"
}


registerEnumType(CreditConfigurationsWalletsScalarFieldEnum, { name: 'CreditConfigurationsWalletsScalarFieldEnum', description: undefined })
