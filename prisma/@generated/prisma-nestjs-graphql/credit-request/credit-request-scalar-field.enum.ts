import { registerEnumType } from '@nestjs/graphql';

export enum CreditRequestScalarFieldEnum {
    id = "id",
    status = "status",
    orderId = "orderId",
    wallet = "wallet",
    creditConfigurationId = "creditConfigurationId",
    userId = "userId",
    createdAt = "createdAt",
    proceedAt = "proceedAt"
}


registerEnumType(CreditRequestScalarFieldEnum, { name: 'CreditRequestScalarFieldEnum', description: undefined })
