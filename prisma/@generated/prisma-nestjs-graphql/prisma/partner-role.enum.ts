import { registerEnumType } from '@nestjs/graphql';

export enum partnerRoleEnum {
    VERIFY = "VERIFY",
    SALES = "SALES",
    DEPT_COLLECTION = "DEPT_COLLECTION",
    DEVELOPER = "DEVELOPER",
    TEST = "TEST",
    REMOVED = "REMOVED",
    NON = "NON"
}


registerEnumType(partnerRoleEnum, { name: 'partnerRoleEnum', description: undefined })
