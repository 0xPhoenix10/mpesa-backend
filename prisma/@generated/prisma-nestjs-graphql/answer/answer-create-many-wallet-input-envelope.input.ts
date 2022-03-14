import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateManyWalletInput } from './answer-create-many-wallet.input';

@InputType()
export class AnswerCreateManyWalletInputEnvelope {

    @Field(() => [AnswerCreateManyWalletInput], {nullable:false})
    data!: Array<AnswerCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
