import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionMethodEnum } from './transaction-method.enum';

@InputType()
export class NullableEnumTransactionMethodEnumFieldUpdateOperationsInput {

    @Field(() => TransactionMethodEnum, {nullable:true})
    set?: keyof typeof TransactionMethodEnum;
}
