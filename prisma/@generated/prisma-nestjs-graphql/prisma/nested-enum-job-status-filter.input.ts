import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStatus } from './job-status.enum';

@InputType()
export class NestedEnumJobStatusFilter {

    @Field(() => JobStatus, {nullable:true})
    equals?: keyof typeof JobStatus;

    @Field(() => [JobStatus], {nullable:true})
    in?: Array<keyof typeof JobStatus>;

    @Field(() => [JobStatus], {nullable:true})
    notIn?: Array<keyof typeof JobStatus>;

    @Field(() => NestedEnumJobStatusFilter, {nullable:true})
    not?: NestedEnumJobStatusFilter;
}
