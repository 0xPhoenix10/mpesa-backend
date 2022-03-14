import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerCreateInput } from './answer-create.input';
import { AnswerUpdateInput } from './answer-update.input';

@ArgsType()
export class UpsertOneAnswerArgs {

    @Field(() => AnswerWhereUniqueInput, {nullable:false})
    where!: AnswerWhereUniqueInput;

    @Field(() => AnswerCreateInput, {nullable:false})
    create!: AnswerCreateInput;

    @Field(() => AnswerUpdateInput, {nullable:false})
    update!: AnswerUpdateInput;
}
