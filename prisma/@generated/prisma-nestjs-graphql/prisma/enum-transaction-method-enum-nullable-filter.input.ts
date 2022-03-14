import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionMethodEnum } from './transaction-method.enum';
import { NestedEnumTransactionMethodEnumNullableFilter } from './nested-enum-transaction-method-enum-nullable-filter.input';

@InputType()
export class EnumTransactionMethodEnumNullableFilter {

    @Field(() => TransactionMethodEnum, {nullable:true})
    equals?: keyof typeof TransactionMethodEnum;

    @Field(() => [TransactionMethodEnum], {nullable:true})
    in?: Array<keyof typeof TransactionMethodEnum>;

    @Field(() => [TransactionMethodEnum], {nullable:true})
    notIn?: Array<keyof typeof TransactionMethodEnum>;

    @Field(() => NestedEnumTransactionMethodEnumNullableFilter, {nullable:true})
    not?: NestedEnumTransactionMethodEnumNullableFilter;
}
