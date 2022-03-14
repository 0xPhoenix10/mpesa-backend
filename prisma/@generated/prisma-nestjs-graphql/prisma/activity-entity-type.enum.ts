import { registerEnumType } from '@nestjs/graphql';

export enum ActivityEntityType {
    PRODUCT_PAIRING = "PRODUCT_PAIRING",
    ORDER = "ORDER",
    CREDIT = "CREDIT",
    INSTALLMENT = "INSTALLMENT",
    UPLOADED_SELLER_DOCUMENTS = "UPLOADED_SELLER_DOCUMENTS",
    GENERAL = "GENERAL",
    TRANSACTION = "TRANSACTION",
    BADGE = "BADGE"
}


registerEnumType(ActivityEntityType, { name: 'ActivityEntityType', description: undefined })
