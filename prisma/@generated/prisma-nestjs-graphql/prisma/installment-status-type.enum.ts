import { registerEnumType } from '@nestjs/graphql';

export enum installmentStatusTypeEnum {
    PENDING = "PENDING",
    LATE = "LATE",
    PAID = "PAID",
    DEFAULTED = "DEFAULTED",
    LATE_PAID = "LATE_PAID"
}


registerEnumType(installmentStatusTypeEnum, { name: 'installmentStatusTypeEnum', description: undefined })
