import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginUpdateManyMutationInput } from './login-update-many-mutation.input';
import { LoginWhereInput } from './login-where.input';

@ArgsType()
export class UpdateManyLoginArgs {

    @Field(() => LoginUpdateManyMutationInput, {nullable:false})
    data!: LoginUpdateManyMutationInput;

    @Field(() => LoginWhereInput, {nullable:true})
    where?: LoginWhereInput;
}
