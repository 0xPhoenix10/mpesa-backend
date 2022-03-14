import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereUniqueInput } from './job-where-unique.input';

@ArgsType()
export class FindUniqueJobArgs {

    @Field(() => JobWhereUniqueInput, {nullable:false})
    where!: JobWhereUniqueInput;
}
