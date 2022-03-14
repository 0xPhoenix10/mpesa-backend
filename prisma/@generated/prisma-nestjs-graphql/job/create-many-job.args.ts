import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobCreateManyInput } from './job-create-many.input';

@ArgsType()
export class CreateManyJobArgs {

    @Field(() => [JobCreateManyInput], {nullable:false})
    data!: Array<JobCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
