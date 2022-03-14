import { registerEnumType } from '@nestjs/graphql';

export enum creditStatusEnum {
    PENDING = "PENDING",
    REQUESTED = "REQUESTED",
    AGREED = "AGREED",
    DEFAULTED = "DEFAULTED",
    PAID = "PAID",
    LATE = "LATE",
    LATE_PAID = "LATE_PAID",
    REFUNDED = "REFUNDED",
    DEFAULTED_PAID = "DEFAULTED_PAID"
}


registerEnumType(creditStatusEnum, { name: 'creditStatusEnum', description: undefined })
