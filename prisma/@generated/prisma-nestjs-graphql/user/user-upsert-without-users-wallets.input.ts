import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUsersWalletsInput } from './user-update-without-users-wallets.input';
import { UserCreateWithoutUsersWalletsInput } from './user-create-without-users-wallets.input';

@InputType()
export class UserUpsertWithoutUsersWalletsInput {

    @Field(() => UserUpdateWithoutUsersWalletsInput, {nullable:false})
    update!: UserUpdateWithoutUsersWalletsInput;

    @Field(() => UserCreateWithoutUsersWalletsInput, {nullable:false})
    create!: UserCreateWithoutUsersWalletsInput;
}
