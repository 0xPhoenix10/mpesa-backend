import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';

@ArgsType()
export class DeleteOneAnswerArgs {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;
}
