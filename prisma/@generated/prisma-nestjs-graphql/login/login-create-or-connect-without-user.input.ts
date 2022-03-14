import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginWhereUniqueInput } from './login-where-unique.input';
import { LoginCreateWithoutUserInput } from './login-create-without-user.input';

@InputType()
export class LoginCreateOrConnectWithoutUserInput {

    @Field(() => LoginWhereUniqueInput, {nullable:false})
    where!: LoginWhereUniqueInput;

    @Field(() => LoginCreateWithoutUserInput, {nullable:false})
    create!: LoginCreateWithoutUserInput;
}
