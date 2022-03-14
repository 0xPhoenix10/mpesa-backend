import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeEnum } from './transaction-type.enum';

@InputType()
export class NestedEnumTransactionTypeEnumNullableFilter {

    @Field(() => TransactionTypeEnum, {nullable:true})
    equals?: keyof typeof TransactionTypeEnum;

    @Field(() => [TransactionTypeEnum], {nullable:true})
    in?: Array<keyof typeof TransactionTypeEnum>;

    @Field(() => [TransactionTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof TransactionTypeEnum>;

    @Field(() => NestedEnumTransactionTypeEnumNullableFilter, {nullable:true})
    not?: NestedEnumTransactionTypeEnumNullableFilter;
}
