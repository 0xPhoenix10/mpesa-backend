import { registerEnumType } from '@nestjs/graphql';

export enum PaymentStatusEnum {
    PAID = "PAID",
    PARTIALLY_PAID = "PARTIALLY_PAID",
    PENDING = "PENDING",
    CREDIT_PROPOSAL_INITIATED = "CREDIT_PROPOSAL_INITIATED",
    REFUNDED = "REFUNDED"
}


registerEnumType(PaymentStatusEnum, { name: 'PaymentStatusEnum', description: undefined })
