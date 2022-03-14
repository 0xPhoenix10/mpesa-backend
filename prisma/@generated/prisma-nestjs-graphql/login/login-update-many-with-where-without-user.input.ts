import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginScalarWhereInput } from './login-scalar-where.input';
import { LoginUpdateManyMutationInput } from './login-update-many-mutation.input';

@InputType()
export class LoginUpdateManyWithWhereWithoutUserInput {

    @Field(() => LoginScalarWhereInput, {nullable:false})
    where!: LoginScalarWhereInput;

    @Field(() => LoginUpdateManyMutationInput, {nullable:false})
    data!: LoginUpdateManyMutationInput;
}
