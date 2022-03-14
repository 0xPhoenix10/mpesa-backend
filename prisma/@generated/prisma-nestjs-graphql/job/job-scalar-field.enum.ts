import { registerEnumType } from '@nestjs/graphql';

export enum JobScalarFieldEnum {
    id = "id",
    status = "status",
    version = "version",
    createdAt = "createdAt",
    name = "name"
}


registerEnumType(JobScalarFieldEnum, { name: 'JobScalarFieldEnum', description: undefined })
