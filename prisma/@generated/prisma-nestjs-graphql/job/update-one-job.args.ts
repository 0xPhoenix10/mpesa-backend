import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobUpdateInput } from './job-update.input';
import { JobWhereUniqueInput } from './job-where-unique.input';

@ArgsType()
export class UpdateOneJobArgs {

    @Field(() => JobUpdateInput, {nullable:false})
    data!: JobUpdateInput;

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;
}
