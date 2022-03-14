import { registerEnumType } from '@nestjs/graphql';

export enum BillingScalarFieldEnum {
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
    phoneNumber = "phoneNumber",
    walletId = "walletId"
}


registerEnumType(BillingScalarFieldEnum, { name: 'BillingScalarFieldEnum', description: undefined })
