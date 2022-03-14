import { registerEnumType } from '@nestjs/graphql';

export enum WalletRole {
    ADMIN = "ADMIN",
    USER = "USER",
    AGENT = "AGENT"
}


registerEnumType(WalletRole, { name: 'WalletRole', description: undefined })
