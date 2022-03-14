import { registerEnumType } from '@nestjs/graphql';

export enum VerifyScalarFieldEnum {
    id = "id",
    UID = "UID",
    phoneNumber = "phoneNumber",
    countryCode = "countryCode",
    createdAt = "createdAt",
    creditConfigId = "creditConfigId",
    OTP = "OTP",
    email = "email",
    userId = "userId",
    orderPaymentMethod = "orderPaymentMethod"
}


registerEnumType(VerifyScalarFieldEnum, { name: 'VerifyScalarFieldEnum', description: undefined })
