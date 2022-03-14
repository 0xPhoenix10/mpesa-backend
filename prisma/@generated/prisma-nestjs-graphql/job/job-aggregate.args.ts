import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';
import { JobOrderByWithRelationInput } from './job-order-by-with-relation.input';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { Int } from '@nestjs/graphql';
import { JobCountAggregateInput } from './job-count-aggregate.input';
import { JobAvgAggregateInput } from './job-avg-aggregate.input';
import { JobSumAggregateInput } from './job-sum-aggregate.input';
import { JobMinAggregateInput } from './job-min-aggregate.input';
import { JobMaxAggregateInput } from './job-max-aggregate.input';

@ArgsType()
export class JobAggregateArgs {

    @Field(() => JobWhereInput, {nullable:true})
    where?: JobWhereInput;

    @Field(() => [JobOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<JobOrderByWithRelationInput>;

    @Field(() => JobWhereUniqueInput, {nullable:true})
    cursor?: JobWhereUniqueInput;

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
