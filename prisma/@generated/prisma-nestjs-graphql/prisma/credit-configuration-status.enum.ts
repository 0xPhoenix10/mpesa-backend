import { registerEnumType } from '@nestjs/graphql';

export enum CreditConfigurationStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}


registerEnumType(CreditConfigurationStatus, { name: 'CreditConfigurationStatus', description: undefined })
