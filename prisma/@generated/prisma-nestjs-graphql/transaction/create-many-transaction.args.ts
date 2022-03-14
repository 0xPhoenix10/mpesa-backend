import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionCreateManyInput } from './transaction-create-many.input';

@ArgsType()
export class CreateManyTransactionArgs {

    @Field(() => [TransactionCreateManyInput], {nullable:false})
    data!: Array<TransactionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
