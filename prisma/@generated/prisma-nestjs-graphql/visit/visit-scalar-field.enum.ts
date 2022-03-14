import { registerEnumType } from '@nestjs/graphql';

export enum VisitScalarFieldEnum {
    id = "id",
    account = "account",
    createdAt = "createdAt",
    visitedBy = "visitedBy",
    visitedByReference = "visitedByReference",
    whenVisitTookPlace = "whenVisitTookPlace"
}


registerEnumType(VisitScalarFieldEnum, { name: 'VisitScalarFieldEnum', description: undefined })
