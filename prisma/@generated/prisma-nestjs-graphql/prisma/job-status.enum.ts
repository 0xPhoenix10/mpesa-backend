import { registerEnumType } from '@nestjs/graphql';

export enum JobStatus {
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}


registerEnumType(JobStatus, { name: 'JobStatus', description: undefined })
