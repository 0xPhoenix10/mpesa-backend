import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVerifyInput } from './user-update-without-verify.input';
import { UserCreateWithoutVerifyInput } from './user-create-without-verify.input';

@InputType()
export class UserUpsertWithoutVerifyInput {

    @Field(() => UserUpdateWithoutVerifyInput, {nullable:false})
    update!: UserUpdateWithoutVerifyInput;

    @Field(() => UserCreateWithoutVerifyInput, {nullable:false})
    create!: UserCreateWithoutVerifyInput;
}
