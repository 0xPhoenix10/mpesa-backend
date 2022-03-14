import { registerEnumType } from '@nestjs/graphql';

export enum SlicesEnum {
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    DAILY = "DAILY"
}


registerEnumType(SlicesEnum, { name: 'SlicesEnum', description: undefined })
