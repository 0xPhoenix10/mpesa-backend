import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JobStatus } from './job-status.enum';

@InputType()
export class EnumJobStatusFieldUpdateOperationsInput {

    @Field(() => JobStatus, {nullable:true})
    set?: keyof typeof JobStatus;
}
