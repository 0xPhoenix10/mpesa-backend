import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeEnum } from './transaction-type.enum';

@InputType()
export class NullableEnumTransactionTypeEnumFieldUpdateOperationsInput {

    @Field(() => TransactionTypeEnum, {nullable:true})
    set?: keyof typeof TransactionTypeEnum;
}
