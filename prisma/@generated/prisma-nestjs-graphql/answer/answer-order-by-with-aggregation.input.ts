import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnswerCountOrderByAggregateInput } from './answer-count-order-by-aggregate.input';
import { AnswerMaxOrderByAggregateInput } from './answer-max-order-by-aggregate.input';
import { AnswerMinOrderByAggregateInput } from './answer-min-order-by-aggregate.input';

@InputType()
export class AnswerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answeredBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answeredByReference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => AnswerCountOrderByAggregateInput, {nullable:true})
    _count?: AnswerCountOrderByAggregateInput;

    @Field(() => AnswerMaxOrderByAggregateInput, {nullable:true})
    _max?: AnswerMaxOrderByAggregateInput;

    @Field(() => AnswerMinOrderByAggregateInput, {nullable:true})
    _min?: AnswerMinOrderByAggregateInput;
}
