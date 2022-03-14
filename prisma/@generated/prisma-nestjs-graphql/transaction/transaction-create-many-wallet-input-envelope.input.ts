import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateManyWalletInput } from './transaction-create-many-wallet.input';

@InputType()
export class TransactionCreateManyWalletInputEnvelope {

    @Field(() => [TransactionCreateManyWalletInput], {nullable:false})
    data!: Array<TransactionCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
