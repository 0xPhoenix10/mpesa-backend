import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';
import { TransactionUpdateManyMutationInput } from './transaction-update-many-mutation.input';

@InputType()
export class TransactionUpdateManyWithWhereWithoutWalletInput {

    @Field(() => TransactionScalarWhereInput, {nullable:false})
    where!: TransactionScalarWhereInput;

    @Field(() => TransactionUpdateManyMutationInput, {nullable:false})
    data!: TransactionUpdateManyMutationInput;
}
