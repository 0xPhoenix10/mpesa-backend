import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerCreateInput } from './answer-create.input';

@ArgsType()
export class CreateOneAnswerArgs {

    @Field(() => AnswerCreateInput, {nullable:false})
    data!: AnswerCreateInput;
}
