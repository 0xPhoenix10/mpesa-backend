import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';
import { JobCreateInput } from './job-create.input';
import { JobUpdateInput } from './job-update.input';

@ArgsType()
export class UpsertOneJobArgs {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;

    @Field(() => JobCreateInput, {nullable:false})
    create!: JobCreateInput;

    @Field(() => JobUpdateInput, {nullable:false})
    update!: JobUpdateInput;
}
