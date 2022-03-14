import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    vendorId = "vendorId",
    quantity = "quantity",
    vendorName = "vendorName",
    vendorType = "vendorType",
    name = "name",
    price = "price",
    unitPrice = "unitPrice",
    description = "description",
    gallery = "gallery",
    categories = "categories",
    createdAt = "createdAt",
    currency = "currency",
    ecommercePlatform = "ecommercePlatform",
    platformId = "platformId",
    affiliateId = "affiliateId"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })
