import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStatus } from '../prisma/job-status.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class JobCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => JobStatus, {nullable:false})
    status!: keyof typeof JobStatus;

    @Field(() => Int, {nullable:true})
    version?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;
}
