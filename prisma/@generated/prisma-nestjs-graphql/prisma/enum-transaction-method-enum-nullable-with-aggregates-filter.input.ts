import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionMethodEnum } from './transaction-method.enum';
import { NestedEnumTransactionMethodEnumNullableWithAggregatesFilter } from './nested-enum-transaction-method-enum-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumTransactionMethodEnumNullableFilter } from './nested-enum-transaction-method-enum-nullable-filter.input';

@InputType()
export class EnumTransactionMethodEnumNullableWithAggregatesFilter {

    @Field(() => TransactionMethodEnum, {nullable:true})
    equals?: keyof typeof TransactionMethodEnum;

    @Field(() => [TransactionMethodEnum], {nullable:true})
    in?: Array<keyof typeof TransactionMethodEnum>;

    @Field(() => [TransactionMethodEnum], {nullable:true})
    notIn?: Array<keyof typeof TransactionMethodEnum>;

    @Field(() => NestedEnumTransactionMethodEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTransactionMethodEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumTransactionMethodEnumNullableFilter, {nullable:true})
    _min?: NestedEnumTransactionMethodEnumNullableFilter;

    @Field(() => NestedEnumTransactionMethodEnumNullableFilter, {nullable:true})
    _max?: NestedEnumTransactionMethodEnumNullableFilter;
}
