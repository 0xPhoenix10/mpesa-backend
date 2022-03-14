import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUsersWalletsInput } from './user-create-without-users-wallets.input';
import { UserCreateOrConnectWithoutUsersWalletsInput } from './user-create-or-connect-without-users-wallets.input';
import { UserUpsertWithoutUsersWalletsInput } from './user-upsert-without-users-wallets.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUsersWalletsInput } from './user-update-without-users-wallets.input';

@InputType()
export class UserUpdateOneRequiredWithoutUsersWalletsInput {

    @Field(() => UserCreateWithoutUsersWalletsInput, {nullable:true})
    create?: UserCreateWithoutUsersWalletsInput;

    @Field(() => UserCreateOrConnectWithoutUsersWalletsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUsersWalletsInput;

    @Field(() => UserUpsertWithoutUsersWalletsInput, {nullable:true})
    upsert?: UserUpsertWithoutUsersWalletsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUsersWalletsInput, {nullable:true})
    update?: UserUpdateWithoutUsersWalletsInput;
}
