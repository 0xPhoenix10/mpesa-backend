import { registerEnumType } from '@nestjs/graphql';

export enum ReferenceNumberScalarFieldEnum {
    id = "id",
    prefix = "prefix",
    lastReference = "lastReference"
}


registerEnumType(ReferenceNumberScalarFieldEnum, { name: 'ReferenceNumberScalarFieldEnum', description: undefined })
