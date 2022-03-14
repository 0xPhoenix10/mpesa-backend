import { registerEnumType } from '@nestjs/graphql';

export enum LoginScalarFieldEnum {
    id = "id",
    qrKey = "qrKey",
    jwt = "jwt",
    userId = "userId",
    createdAt = "createdAt"
}


registerEnumType(LoginScalarFieldEnum, { name: 'LoginScalarFieldEnum', description: undefined })
