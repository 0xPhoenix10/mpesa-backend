import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUsersWalletsInput } from './user-create-without-users-wallets.input';
import { UserCreateOrConnectWithoutUsersWalletsInput } from './user-create-or-connect-without-users-wallets.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUsersWalletsInput {

    @Field(() => UserCreateWithoutUsersWalletsInput, {nullable:true})
    create?: UserCreateWithoutUsersWalletsInput;

    @Field(() => UserCreateOrConnectWithoutUsersWalletsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutUsersWalletsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
