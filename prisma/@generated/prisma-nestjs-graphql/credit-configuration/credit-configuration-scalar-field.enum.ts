import { registerEnumType } from '@nestjs/graphql';

export enum CreditConfigurationScalarFieldEnum {
    id = "id",
    name = "name",
    shouldPayDeposit = "shouldPayDeposit",
    depositPercentage = "depositPercentage",
    duration = "duration",
    slices = "slices",
    seviFeesPercentage = "seviFeesPercentage",
    daysToStartAfterDelivery = "daysToStartAfterDelivery",
    lateInstallmentFeesPercentage = "lateInstallmentFeesPercentage",
    affiliatePercentage = "affiliatePercentage",
    creditLateFeesPercentage = "creditLateFeesPercentage",
    creditLateDays = "creditLateDays",
    createdAt = "createdAt",
    status = "status",
    numberOfAllowedCredits = "numberOfAllowedCredits",
    fundFeesPercentage = "fundFeesPercentage",
    fundId = "fundId"
}


registerEnumType(CreditConfigurationScalarFieldEnum, { name: 'CreditConfigurationScalarFieldEnum', description: undefined })
