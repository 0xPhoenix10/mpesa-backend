import { registerEnumType } from '@nestjs/graphql';

export enum ActivityPriority {
    URGENT = "URGENT",
    HIGH = "HIGH",
    NORMAL = "NORMAL",
    LOW = "LOW"
}


registerEnumType(ActivityPriority, { name: 'ActivityPriority', description: undefined })
