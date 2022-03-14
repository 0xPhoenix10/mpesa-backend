import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeEnum } from './transaction-type.enum';
import { NestedEnumTransactionTypeEnumNullableFilter } from './nested-enum-transaction-type-enum-nullable-filter.input';

@InputType()
export class EnumTransactionTypeEnumNullableFilter {

    @Field(() => TransactionTypeEnum, {nullable:true})
    equals?: keyof typeof TransactionTypeEnum;

    @Field(() => [TransactionTypeEnum], {nullable:true})
    in?: Array<keyof typeof TransactionTypeEnum>;

    @Field(() => [TransactionTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof TransactionTypeEnum>;

    @Field(() => NestedEnumTransactionTypeEnumNullableFilter, {nullable:true})
    not?: NestedEnumTransactionTypeEnumNullableFilter;
}
