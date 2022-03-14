import { registerEnumType } from '@nestjs/graphql';

export enum ShippingScalarFieldEnum {
    id = "id",
    firstName = "firstName",
    lastName = "lastName",
    company = "company",
    address1 = "address1",
    address2 = "address2",
    city = "city",
    state = "state",
    postcode = "postcode",
    country = "country",
    email = "email",
    longitude = "longitude",
    shippingType = "shippingType",
    shippingFee = "shippingFee",
    latitude = "latitude",
    phoneNumber = "phoneNumber",
    walletId = "walletId",
    isDefault = "isDefault",
    seviVerified = "seviVerified",
    createdAt = "createdAt"
}


registerEnumType(ShippingScalarFieldEnum, { name: 'ShippingScalarFieldEnum', description: undefined })
