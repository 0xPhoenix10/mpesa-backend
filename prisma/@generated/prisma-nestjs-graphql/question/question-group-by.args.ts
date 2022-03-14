import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionWhereInput } from './question-where.input';
import { QuestionOrderByWithAggregationInput } from './question-order-by-with-aggregation.input';
import { QuestionScalarFieldEnum } from './question-scalar-field.enum';
import { QuestionScalarWhereWithAggregatesInput } from './question-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { QuestionCountAggregateInput } from './question-count-aggregate.input';
import { QuestionMinAggregateInput } from './question-min-aggregate.input';
import { QuestionMaxAggregateInput } from './question-max-aggregate.input';

@ArgsType()
export class QuestionGroupByArgs {

    @Field(() => QuestionWhereInput, {nullable:true})
    where?: QuestionWhereInput;

    @Field(() => [QuestionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<QuestionOrderByWithAggregationInput>;

    @Field(() => [QuestionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof QuestionScalarFieldEnum>;

    @Field(() => QuestionScalarWhereWithAggregatesInput, {nullable:true})
    having?: QuestionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => QuestionCountAggregateInput, {nullable:true})
    _count?: QuestionCountAggregateInput;

    @Field(() => QuestionMinAggregateInput, {nullable:true})
    _min?: QuestionMinAggregateInput;

    @Field(() => QuestionMaxAggregateInput, {nullable:true})
    _max?: QuestionMaxAggregateInput;
}
