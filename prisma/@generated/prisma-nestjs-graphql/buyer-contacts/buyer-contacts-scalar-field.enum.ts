import { registerEnumType } from '@nestjs/graphql';

export enum BuyerContactsScalarFieldEnum {
    id = "id",
    walletId = "walletId",
    name = "name",
    phoneNumber = "phoneNumber",
    createdAt = "createdAt"
}


registerEnumType(BuyerContactsScalarFieldEnum, { name: 'BuyerContactsScalarFieldEnum', description: undefined })
