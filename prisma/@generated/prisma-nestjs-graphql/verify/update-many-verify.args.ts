import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyUpdateManyMutationInput } from './verify-update-many-mutation.input';
import { VerifyWhereInput } from './verify-where.input';

@ArgsType()
export class UpdateManyVerifyArgs {

    @Field(() => VerifyUpdateManyMutationInput, {nullable:false})
    data!: VerifyUpdateManyMutationInput;

    @Field(() => VerifyWhereInput, {nullable:true})
    where?: VerifyWhereInput;
}
