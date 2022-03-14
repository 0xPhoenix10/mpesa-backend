import { registerEnumType } from '@nestjs/graphql';

export enum AnswerScalarFieldEnum {
    id = "id",
    questionId = "questionId",
    createdAt = "createdAt",
    answer = "answer",
    answeredBy = "answeredBy",
    answeredByReference = "answeredByReference",
    account = "account"
}


registerEnumType(AnswerScalarFieldEnum, { name: 'AnswerScalarFieldEnum', description: undefined })
