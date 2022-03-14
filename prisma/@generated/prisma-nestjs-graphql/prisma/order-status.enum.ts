import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatusEnum {
    PENDING = "PENDING",
    CANCELLED = "CANCELLED",
    AWAITING_SHIPMENT = "AWAITING_SHIPMENT",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    REFUNDED = "REFUNDED",
    DISPUTED = "DISPUTED",
    RETURNED = "RETURNED",
    ARCHIVED = "ARCHIVED"
}


registerEnumType(OrderStatusEnum, { name: 'OrderStatusEnum', description: undefined })
