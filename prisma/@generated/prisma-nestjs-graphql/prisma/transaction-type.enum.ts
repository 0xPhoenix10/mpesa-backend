import { registerEnumType } from '@nestjs/graphql';

export enum TransactionTypeEnum {
    TOP_UP = "TOP_UP",
    DEDUCT = "DEDUCT"
}


registerEnumType(TransactionTypeEnum, { name: 'TransactionTypeEnum', description: undefined })
