import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobUpdateManyMutationInput } from './job-update-many-mutation.input';
import { JobWhereInput } from './job-where.input';

@ArgsType()
export class UpdateManyJobArgs {

    @Field(() => JobUpdateManyMutationInput, {nullable:false})
    data!: JobUpdateManyMutationInput;

    @Field(() => JobWhereInput, {nullable:true})
    where?: JobWhereInput;
}
