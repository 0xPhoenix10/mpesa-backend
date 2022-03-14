import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyWhereInput } from './verify-where.input';

@ArgsType()
export class DeleteManyVerifyArgs {

    @Field(() => VerifyWhereInput, {nullable:true})
    where?: VerifyWhereInput;
}
