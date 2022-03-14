import { registerEnumType } from '@nestjs/graphql';

export enum CustomerScalarFieldEnum {
    customerId = "customerId",
    vendorId = "vendorId"
}


registerEnumType(CustomerScalarFieldEnum, { name: 'CustomerScalarFieldEnum', description: undefined })
