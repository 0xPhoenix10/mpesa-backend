import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { JobStatus } from '../prisma/job-status.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Job {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => JobStatus, {nullable:false})
    status!: keyof typeof JobStatus;

    @Field(() => Int, {nullable:false,defaultValue:0})
    version!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    name!: string;
}
