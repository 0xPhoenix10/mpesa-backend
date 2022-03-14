import { registerEnumType } from '@nestjs/graphql';

export enum legalStatusEnum {
    SOLE = "SOLE",
    LTD = "LTD"
}


registerEnumType(legalStatusEnum, { name: 'legalStatusEnum', description: undefined })
