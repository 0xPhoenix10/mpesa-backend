import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionCreateInput } from './transaction-create.input';
import { TransactionUpdateInput } from './transaction-update.input';

@ArgsType()
export class UpsertOneTransactionArgs {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;

    @Field(() => TransactionCreateInput, {nullable:false})
    create!: TransactionCreateInput;

    @Field(() => TransactionUpdateInput, {nullable:false})
    update!: TransactionUpdateInput;
}
