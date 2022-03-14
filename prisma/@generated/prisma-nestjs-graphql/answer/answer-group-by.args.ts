import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerWhereInput } from './answer-where.input';
import { AnswerOrderByWithAggregationInput } from './answer-order-by-with-aggregation.input';
import { AnswerScalarFieldEnum } from './answer-scalar-field.enum';
import { AnswerScalarWhereWithAggregatesInput } from './answer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AnswerCountAggregateInput } from './answer-count-aggregate.input';
import { AnswerMinAggregateInput } from './answer-min-aggregate.input';
import { AnswerMaxAggregateInput } from './answer-max-aggregate.input';

@ArgsType()
export class AnswerGroupByArgs {

    @Field(() => AnswerWhereInput, {nullable:true})
    where?: AnswerWhereInput;

    @Field(() => [AnswerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AnswerOrderByWithAggregationInput>;

    @Field(() => [AnswerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AnswerScalarFieldEnum>;

    @Field(() => AnswerScalarWhereWithAggregatesInput, {nullable:true})
    having?: AnswerScalarWhereWithAggregatesInput;

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
