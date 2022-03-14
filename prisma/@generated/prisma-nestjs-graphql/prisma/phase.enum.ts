import { registerEnumType } from '@nestjs/graphql';

export enum phaseEnum {
    NON = "NON",
    REJECTED = "REJECTED",
    WAITING_LIST = "WAITING_LIST",
    GET_BADGES = "GET_BADGES",
    DOCUMENT_CHECKS = "DOCUMENT_CHECKS",
    LOCATION_VISIT = "LOCATION_VISIT",
    LOCATION_VISIT_SCHEDULED = "LOCATION_VISIT_SCHEDULED",
    DUE_DILIGENCE = "DUE_DILIGENCE",
    MOVE_TO = "MOVE_TO",
    ACCEPTED = "ACCEPTED"
}


registerEnumType(phaseEnum, { name: 'phaseEnum', description: undefined })
