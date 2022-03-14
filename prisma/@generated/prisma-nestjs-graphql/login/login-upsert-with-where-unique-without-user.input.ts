import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginWhereUniqueInput } from './login-where-unique.input';
import { LoginUpdateWithoutUserInput } from './login-update-without-user.input';
import { LoginCreateWithoutUserInput } from './login-create-without-user.input';

@InputType()
export class LoginUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => LoginWhereUniqueInput, {nullable:false})
    where!: LoginWhereUniqueInput;

    @Field(() => LoginUpdateWithoutUserInput, {nullable:false})
    update!: LoginUpdateWithoutUserInput;

    @Field(() => LoginCreateWithoutUserInput, {nullable:false})
    create!: LoginCreateWithoutUserInput;
}
