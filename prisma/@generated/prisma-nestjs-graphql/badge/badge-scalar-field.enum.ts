import { registerEnumType } from '@nestjs/graphql';

export enum BadgeScalarFieldEnum {
    id = "id",
    account = "account",
    active = "active",
    createdAt = "createdAt",
    type = "type",
    count = "count"
}


registerEnumType(BadgeScalarFieldEnum, { name: 'BadgeScalarFieldEnum', description: undefined })
