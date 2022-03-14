import { registerEnumType } from '@nestjs/graphql';

export enum ActivityScalarFieldEnum {
    id = "id",
    entityId = "entityId",
    entityType = "entityType",
    priority = "priority",
    phoneNumber = "phoneNumber",
    message = "message",
    isRead = "isRead",
    createdAt = "createdAt",
    entity = "entity",
    userId = "userId"
}


registerEnumType(ActivityScalarFieldEnum, { name: 'ActivityScalarFieldEnum', description: undefined })
