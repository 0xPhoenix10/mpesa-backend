import { registerEnumType } from '@nestjs/graphql';

export enum OrderScalarFieldEnum {
    id = "id",
    userId = "userId",
    vendorId = "vendorId",
    status = "status",
    notes = "notes",
    name = "name",
    phoneNumber = "phoneNumber",
    affiliateId = "affiliateId",
    products = "products",
    items = "items",
    deliveryCode = "deliveryCode",
    createdAt = "createdAt",
    paymentStatus = "paymentStatus",
    amount = "amount",
    paymentMethod = "paymentMethod",
    billingId = "billingId",
    shippingId = "shippingId",
    ecommercePlatform = "ecommercePlatform",
    currency = "currency",
    platformId = "platformId",
    customerId = "customerId",
    referenceNumber = "referenceNumber"
}


registerEnumType(OrderScalarFieldEnum, { name: 'OrderScalarFieldEnum', description: undefined })
