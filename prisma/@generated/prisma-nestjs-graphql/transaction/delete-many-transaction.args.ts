import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';

@ArgsType()
export class DeleteManyTransactionArgs {

    @Field(() => TransactionWhereInput, {nullable:true})
    where?: TransactionWhereInput;
}
