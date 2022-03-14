import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { JobStatus } from '../prisma/job-status.enum';
import { Int } from '@nestjs/graphql';
import { JobCountAggregate } from './job-count-aggregate.output';
import { JobAvgAggregate } from './job-avg-aggregate.output';
import { JobSumAggregate } from './job-sum-aggregate.output';
import { JobMinAggregate } from './job-min-aggregate.output';
import { JobMaxAggregate } from './job-max-aggregate.output';

@ObjectType()
export class JobGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => JobStatus, {nullable:false})
    status!: keyof typeof JobStatus;

    @Field(() => Int, {nullable:false})
    version!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => JobCountAggregate, {nullable:true})
    _count?: JobCountAggregate;

    @Field(() => JobAvgAggregate, {nullable:true})
    _avg?: JobAvgAggregate;

    @Field(() => JobSumAggregate, {nullable:true})
    _sum?: JobSumAggregate;

    @Field(() => JobMinAggregate, {nullable:true})
    _min?: JobMinAggregate;

    @Field(() => JobMaxAggregate, {nullable:true})
    _max?: JobMaxAggregate;
}
