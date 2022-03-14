import { registerEnumType } from '@nestjs/graphql';

export enum OtherMemberKYCScalarFieldEnum {
    id = "id",
    name = "name",
    documentId = "documentId",
    documentCountry = "documentCountry",
    documentData = "documentData",
    documentFirstName = "documentFirstName",
    documentLastName = "documentLastName",
    documentImage = "documentImage",
    documentGender = "documentGender",
    documentDateOfBirth = "documentDateOfBirth",
    documentDateOfIssue = "documentDateOfIssue",
    documentSerialNumber = "documentSerialNumber",
    documentCreatedAt = "documentCreatedAt",
    profilePictureURL = "profilePictureURL",
    idCardURL = "idCardURL",
    createdAt = "createdAt",
    createdByUserId = "createdByUserId",
    userIdToKYC = "userIdToKYC",
    OTP = "OTP"
}


registerEnumType(OtherMemberKYCScalarFieldEnum, { name: 'OtherMemberKYCScalarFieldEnum', description: undefined })
