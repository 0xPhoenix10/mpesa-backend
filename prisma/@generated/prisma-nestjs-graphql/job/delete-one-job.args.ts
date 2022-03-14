import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';

@ArgsType()
export class DeleteOneJobArgs {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;
}
