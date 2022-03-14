import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerUpdateManyMutationInput } from './answer-update-many-mutation.input';
import { AnswerWhereInput } from './answer-where.input';

@ArgsType()
export class UpdateManyAnswerArgs {

    @Field(() => AnswerUpdateManyMutationInput, {nullable:false})
    data!: AnswerUpdateManyMutationInput;

    @Field(() => AnswerWhereInput, {nullable:true})
    where?: AnswerWhereInput;
}
