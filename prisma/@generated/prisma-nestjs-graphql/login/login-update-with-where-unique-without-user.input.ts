import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginWhereUniqueInput } from './login-where-unique.input';
import { LoginUpdateWithoutUserInput } from './login-update-without-user.input';

@InputType()
export class LoginUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => LoginWhereUniqueInput, {nullable:false})
    where!: LoginWhereUniqueInput;

    @Field(() => LoginUpdateWithoutUserInput, {nullable:false})
    data!: LoginUpdateWithoutUserInput;
}
