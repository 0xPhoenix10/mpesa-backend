import { registerEnumType } from '@nestjs/graphql';

export enum CreditRequestStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    FAILED = "FAILED"
}


registerEnumType(CreditRequestStatus, { name: 'CreditRequestStatus', description: undefined })
