import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionCreateInput } from './transaction-create.input';

@ArgsType()
export class CreateOneTransactionArgs {

    @Field(() => TransactionCreateInput, {nullable:false})
    data!: TransactionCreateInput;
}
