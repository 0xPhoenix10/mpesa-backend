import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';

@InputType()
export class TransactionListRelationFilter {

    @Field(() => TransactionWhereInput, {nullable:true})
    every?: TransactionWhereInput;

    @Field(() => TransactionWhereInput, {nullable:true})
    some?: TransactionWhereInput;

    @Field(() => TransactionWhereInput, {nullable:true})
    none?: TransactionWhereInput;
}
