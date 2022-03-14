import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerWhereInput } from './answer-where.input';

@ArgsType()
export class DeleteManyAnswerArgs {

    @Field(() => AnswerWhereInput, {nullable:true})
    where?: AnswerWhereInput;
}
