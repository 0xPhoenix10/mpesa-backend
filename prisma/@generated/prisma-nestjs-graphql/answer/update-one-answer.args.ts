import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerUpdateInput } from './answer-update.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';

@ArgsType()
export class UpdateOneAnswerArgs {

    @Field(() => AnswerUpdateInput, {nullable:false})
    data!: AnswerUpdateInput;

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;
}
