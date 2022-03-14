import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerWhereInput } from './answer-where.input';

@InputType()
export class AnswerListRelationFilter {

    @Field(() => AnswerWhereInput, {nullable:true})
    every?: AnswerWhereInput;

    @Field(() => AnswerWhereInput, {nullable:true})
    some?: AnswerWhereInput;

    @Field(() => AnswerWhereInput, {nullable:true})
    none?: AnswerWhereInput;
}
