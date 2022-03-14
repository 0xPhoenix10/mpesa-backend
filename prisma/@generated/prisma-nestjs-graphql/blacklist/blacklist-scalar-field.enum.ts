import { registerEnumType } from '@nestjs/graphql';

export enum BlacklistScalarFieldEnum {
    id = "id",
    taxId = "taxId",
    documentId = "documentId",
    phoneNumber = "phoneNumber",
    createdAt = "createdAt"
}


registerEnumType(BlacklistScalarFieldEnum, { name: 'BlacklistScalarFieldEnum', description: undefined })
