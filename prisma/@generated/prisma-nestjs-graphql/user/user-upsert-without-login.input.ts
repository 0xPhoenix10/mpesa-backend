import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLoginInput } from './user-update-without-login.input';
import { UserCreateWithoutLoginInput } from './user-create-without-login.input';

@InputType()
export class UserUpsertWithoutLoginInput {

    @Field(() => UserUpdateWithoutLoginInput, {nullable:false})
    update!: UserUpdateWithoutLoginInput;

    @Field(() => UserCreateWithoutLoginInput, {nullable:false})
    create!: UserCreateWithoutLoginInput;
}
