import { registerEnumType } from '@nestjs/graphql';

export enum WalletTypesEnum {
    PERSONAL = "PERSONAL",
    COMPANY = "COMPANY",
    GROUP = "GROUP",
    FUND = "FUND"
}


registerEnumType(WalletTypesEnum, { name: 'WalletTypesEnum', description: undefined })
