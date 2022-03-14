import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionUpdateManyMutationInput } from './transaction-update-many-mutation.input';
import { TransactionWhereInput } from './transaction-where.input';

@ArgsType()
export class UpdateManyTransactionArgs {

    @Field(() => TransactionUpdateManyMutationInput, {nullable:false})
    data!: TransactionUpdateManyMutationInput;

    @Field(() => TransactionWhereInput, {nullable:true})
    where?: TransactionWhereInput;
}
