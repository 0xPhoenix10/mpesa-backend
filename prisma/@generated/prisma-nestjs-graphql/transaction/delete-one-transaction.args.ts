import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@ArgsType()
export class DeleteOneTransactionArgs {

    @Field(() => TransactionWhereUniqueInput, {nullable:false})
    where!: TransactionWhereUniqueInput;
}
