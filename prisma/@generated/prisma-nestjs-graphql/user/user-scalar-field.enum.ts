import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    userPhoto = "userPhoto",
    phoneNumber = "phoneNumber",
    countryCode = "countryCode",
    documentId = "documentId",
    url = "url",
    email = "email",
    pin = "pin",
    deviceToken = "deviceToken",
    createdAt = "createdAt",
    verified = "verified",
    expoPushToken = "expoPushToken",
    inviterId = "inviterId",
    faceIdImage = "faceIdImage",
    documentCountry = "documentCountry",
    documentData = "documentData",
    documentFirstName = "documentFirstName",
    documentLastName = "documentLastName",
    documentImage = "documentImage",
    documentGender = "documentGender",
    documentDateOfBirth = "documentDateOfBirth",
    documentDateOfIssue = "documentDateOfIssue",
    documentSerialNumber = "documentSerialNumber",
    documentCreatedAt = "documentCreatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
