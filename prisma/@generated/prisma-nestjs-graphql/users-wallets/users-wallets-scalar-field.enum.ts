import { registerEnumType } from '@nestjs/graphql';

export enum UsersWalletsScalarFieldEnum {
    userId = "userId",
    walletId = "walletId",
    role = "role"
}


registerEnumType(UsersWalletsScalarFieldEnum, { name: 'UsersWalletsScalarFieldEnum', description: undefined })
