import { registerEnumType } from '@nestjs/graphql';

export enum SettlementScalarFieldEnum {
    id = "id",
    type = "type",
    account = "account",
    bankAccount = "bankAccount",
    bankAccountName = "bankAccountName",
    bankBranch = "bankBranch",
    bankName = "bankName",
    phoneNumber = "phoneNumber",
    tillNumber = "tillNumber",
    paybillNumber = "paybillNumber",
    verified = "verified",
    verifiedByUser = "verifiedByUser",
    createdAt = "createdAt",
    createdBy = "createdBy",
    createdByAgent = "createdByAgent"
}


registerEnumType(SettlementScalarFieldEnum, { name: 'SettlementScalarFieldEnum', description: undefined })
