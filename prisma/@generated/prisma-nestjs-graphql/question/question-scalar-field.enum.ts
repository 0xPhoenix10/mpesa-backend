import { registerEnumType } from '@nestjs/graphql';

export enum QuestionScalarFieldEnum {
    id = "id",
    answersType = "answersType",
    category = "category",
    question = "question",
    isActive = "isActive",
    description = "description"
}


registerEnumType(QuestionScalarFieldEnum, { name: 'QuestionScalarFieldEnum', description: undefined })
