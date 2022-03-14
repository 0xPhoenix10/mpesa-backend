import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutUsersWalletsInput } from './user-create-without-users-wallets.input';

@InputType()
export class UserCreateOrConnectWithoutUsersWalletsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUsersWalletsInput, {nullable:false})
    create!: UserCreateWithoutUsersWalletsInput;
}
