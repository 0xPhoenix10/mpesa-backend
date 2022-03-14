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
    verified = "verified",
    verifiedByUser = "verifiedByUser",
    paybill = "paybill",
    createdAt = "createdAt",
    createdBy = "createdBy",
    createdByAgent = "createdByAgent"
}


registerEnumType(SettlementScalarFieldEnum, { name: 'SettlementScalarFieldEnum', description: undefined })
