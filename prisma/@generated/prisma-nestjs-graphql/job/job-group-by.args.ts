import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';
import { JobOrderByWithAggregationInput } from './job-order-by-with-aggregation.input';
import { JobScalarFieldEnum } from './job-scalar-field.enum';
import { JobScalarWhereWithAggregatesInput } from './job-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { JobCountAggregateInput } from './job-count-aggregate.input';
import { JobAvgAggregateInput } from './job-avg-aggregate.input';
import { JobSumAggregateInput } from './job-sum-aggregate.input';
import { JobMinAggregateInput } from './job-min-aggregate.input';
import { JobMaxAggregateInput } from './job-max-aggregate.input';

@ArgsType()
export class JobGroupByArgs {

    @Field(() => JobWhereInput, {nullable:true})
    where?: JobWhereInput;

    @Field(() => [JobOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<JobOrderByWithAggregationInput>;

    @Field(() => [JobScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof JobScalarFieldEnum>;

    @Field(() => JobScalarWhereWithAggregatesInput, {nullable:true})
    having?: JobScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => JobCountAggregateInput, {nullable:true})
    _count?: JobCountAggregateInput;

    @Field(() => JobAvgAggregateInput, {nullable:true})
    _avg?: JobAvgAggregateInput;

    @Field(() => JobSumAggregateInput, {nullable:true})
    _sum?: JobSumAggregateInput;

    @Field(() => JobMinAggregateInput, {nullable:true})
    _min?: JobMinAggregateInput;

    @Field(() => JobMaxAggregateInput, {nullable:true})
    _max?: JobMaxAggregateInput;
}
