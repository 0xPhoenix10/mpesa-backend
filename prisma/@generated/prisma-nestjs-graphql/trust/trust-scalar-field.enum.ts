import { registerEnumType } from '@nestjs/graphql';

export enum TrustScalarFieldEnum {
    account = "account",
    trustRating = "trustRating",
    score = "score",
    createdAt = "createdAt"
}


registerEnumType(TrustScalarFieldEnum, { name: 'TrustScalarFieldEnum', description: undefined })
