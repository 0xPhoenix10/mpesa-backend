import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    messageId = "messageId",
    installmentSlices = "installmentSlices",
    SMS = "SMS",
    description = "description",
    pushNotificationTitle = "pushNotificationTitle",
    pushNotificationBody = "pushNotificationBody",
    email = "email",
    language = "language"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
