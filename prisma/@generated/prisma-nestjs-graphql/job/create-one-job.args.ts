import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCreateInput } from './job-create.input';

@ArgsType()
export class CreateOneJobArgs {

    @Field(() => JobCreateInput, {nullable:false})
    data!: JobCreateInput;
}
