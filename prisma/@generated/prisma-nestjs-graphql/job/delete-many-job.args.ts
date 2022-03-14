import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { JobWhereInput } from './job-where.input';

@ArgsType()
export class DeleteManyJobArgs {

    @Field(() => JobWhereInput, {nullable:true})
    where?: JobWhereInput;
}
