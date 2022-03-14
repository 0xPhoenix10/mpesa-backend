import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerWhereInput } from './answer-where.input';
import { AnswerOrderByWithRelationInput } from './answer-order-by-with-relation.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnswerCountAggregateInput } from './answer-count-aggregate.input';
import { AnswerMinAggregateInput } from './answer-min-aggregate.input';
import { AnswerMaxAggregateInput } from './answer-max-aggregate.input';

@ArgsType()
export class AnswerAggregateArgs {

    @Field(() => AnswerWhereInput, {nullable:true})
    where?: AnswerWhereInput;

    @Field(() => [AnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnswerOrderByWithRelationInput>;

    @Field(() => AnswerWhereUniqueInput, {nullable:true})
    cursor?: AnswerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnswerCountAggregateInput, {nullable:true})
    _count?: AnswerCountAggregateInput;

    @Field(() => AnswerMinAggregateInput, {nullable:true})
    _min?: AnswerMinAggregateInput;

    @Field(() => AnswerMaxAggregateInput, {nullable:true})
    _max?: AnswerMaxAggregateInput;
}
