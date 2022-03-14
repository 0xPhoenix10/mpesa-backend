import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { JobCountOrderByAggregateInput } from './job-count-order-by-aggregate.input';
import { JobAvgOrderByAggregateInput } from './job-avg-order-by-aggregate.input';
import { JobMaxOrderByAggregateInput } from './job-max-order-by-aggregate.input';
import { JobMinOrderByAggregateInput } from './job-min-order-by-aggregate.input';
import { JobSumOrderByAggregateInput } from './job-sum-order-by-aggregate.input';

@InputType()
export class JobOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => JobCountOrderByAggregateInput, {nullable:true})
    _count?: JobCountOrderByAggregateInput;

    @Field(() => JobAvgOrderByAggregateInput, {nullable:true})
    _avg?: JobAvgOrderByAggregateInput;

    @Field(() => JobMaxOrderByAggregateInput, {nullable:true})
    _max?: JobMaxOrderByAggregateInput;

    @Field(() => JobMinOrderByAggregateInput, {nullable:true})
    _min?: JobMinOrderByAggregateInput;

    @Field(() => JobSumOrderByAggregateInput, {nullable:true})
    _sum?: JobSumOrderByAggregateInput;
}
