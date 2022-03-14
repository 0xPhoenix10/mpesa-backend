import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionMethodEnum } from './transaction-method.enum';
import { NestedEnumTransactionMethodEnumFilter } from './nested-enum-transaction-method-enum-filter.input';

@InputType()
export class EnumTransactionMethodEnumFilter {

    @Field(() => TransactionMethodEnum, {nullable:true})
    equals?: keyof typeof TransactionMethodEnum;

    @Field(() => [TransactionMethodEnum], {nullable:true})
    in?: Array<keyof typeof TransactionMethodEnum>;

    @Field(() => [TransactionMethodEnum], {nullable:true})
    notIn?: Array<keyof typeof TransactionMethodEnum>;

    @Field(() => NestedEnumTransactionMethodEnumFilter, {nullable:true})
    not?: NestedEnumTransactionMethodEnumFilter;
}
