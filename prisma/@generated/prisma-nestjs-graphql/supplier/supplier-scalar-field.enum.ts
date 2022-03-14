import { registerEnumType } from '@nestjs/graphql';

export enum SupplierScalarFieldEnum {
    supplierId = "supplierId",
    vendorId = "vendorId"
}


registerEnumType(SupplierScalarFieldEnum, { name: 'SupplierScalarFieldEnum', description: undefined })
