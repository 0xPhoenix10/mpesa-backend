import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionTypeEnum } from './transaction-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTransactionTypeEnumNullableFilter } from './nested-enum-transaction-type-enum-nullable-filter.input';

@InputType()
export class NestedEnumTransactionTypeEnumNullableWithAggregatesFilter {

    @Field(() => TransactionTypeEnum, {nullable:true})
    equals?: keyof typeof TransactionTypeEnum;

    @Field(() => [TransactionTypeEnum], {nullable:true})
    in?: Array<keyof typeof TransactionTypeEnum>;

    @Field(() => [TransactionTypeEnum], {nullable:true})
    notIn?: Array<keyof typeof TransactionTypeEnum>;

    @Field(() => NestedEnumTransactionTypeEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTransactionTypeEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTransactionTypeEnumNullableFilter, {nullable:true})
    _min?: NestedEnumTransactionTypeEnumNullableFilter;

    @Field(() => NestedEnumTransactionTypeEnumNullableFilter, {nullable:true})
    _max?: NestedEnumTransactionTypeEnumNullableFilter;
}
