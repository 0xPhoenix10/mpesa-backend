import { registerEnumType } from '@nestjs/graphql';

export enum QuestionCategoryEnum {
    GENERAL = "GENERAL",
    SWOT = "SWOT",
    VERIFY = "VERIFY",
    FINANCE = "FINANCE",
    OWNER = "OWNER",
    DOCUMENT = "DOCUMENT",
    LOCATION_SELLER_VISIT = "LOCATION_SELLER_VISIT",
    LOCATION_BUYER_VISIT = "LOCATION_BUYER_VISIT"
}


registerEnumType(QuestionCategoryEnum, { name: 'QuestionCategoryEnum', description: undefined })
