import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionMethodEnum } from './transaction-method.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTransactionMethodEnumFilter } from './nested-enum-transaction-method-enum-filter.input';

@InputType()
export class NestedEnumTransactionMethodEnumWithAggregatesFilter {

    @Field(() => TransactionMethodEnum, {nullable:true})
    equals?: keyof typeof TransactionMethodEnum;

    @Field(() => [TransactionMethodEnum], {nullable:true})
    in?: Array<keyof typeof TransactionMethodEnum>;

    @Field(() => [TransactionMethodEnum], {nullable:true})
    notIn?: Array<keyof typeof TransactionMethodEnum>;

    @Field(() => NestedEnumTransactionMethodEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTransactionMethodEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTransactionMethodEnumFilter, {nullable:true})
    _min?: NestedEnumTransactionMethodEnumFilter;

    @Field(() => NestedEnumTransactionMethodEnumFilter, {nullable:true})
    _max?: NestedEnumTransactionMethodEnumFilter;
}
