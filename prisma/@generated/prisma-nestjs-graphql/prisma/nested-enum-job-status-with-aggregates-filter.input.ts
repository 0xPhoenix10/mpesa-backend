import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStatus } from './job-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumJobStatusFilter } from './nested-enum-job-status-filter.input';

@InputType()
export class NestedEnumJobStatusWithAggregatesFilter {

    @Field(() => JobStatus, {nullable:true})
    equals?: keyof typeof JobStatus;

    @Field(() => [JobStatus], {nullable:true})
    in?: Array<keyof typeof JobStatus>;

    @Field(() => [JobStatus], {nullable:true})
    notIn?: Array<keyof typeof JobStatus>;

    @Field(() => NestedEnumJobStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumJobStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumJobStatusFilter, {nullable:true})
    _min?: NestedEnumJobStatusFilter;

    @Field(() => NestedEnumJobStatusFilter, {nullable:true})
    _max?: NestedEnumJobStatusFilter;
}
