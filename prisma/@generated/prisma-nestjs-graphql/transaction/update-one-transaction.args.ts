import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionUpdateInput } from './transaction-update.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@ArgsType()
export class UpdateOneTransactionArgs {

    @Field(() => TransactionUpdateInput, {nullable:false})
    data!: TransactionUpdateInput;

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;
}
