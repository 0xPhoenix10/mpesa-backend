import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsCreateWithoutUserInput } from './users-wallets-create-without-user.input';
import { UsersWalletsCreateOrConnectWithoutUserInput } from './users-wallets-create-or-connect-without-user.input';
import { UsersWalletsCreateManyUserInputEnvelope } from './users-wallets-create-many-user-input-envelope.input';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';

@InputType()
export class UsersWalletsCreateNestedManyWithoutUserInput {

    @Field(() => [UsersWalletsCreateWithoutUserInput], {nullable:true})
    create?: Array<UsersWalletsCreateWithoutUserInput>;

    @Field(() => [UsersWalletsCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UsersWalletsCreateOrConnectWithoutUserInput>;

    @Field(() => UsersWalletsCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UsersWalletsCreateManyUserInputEnvelope;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    connect?: Array<UsersWalletsWhereUniqueInput>;
}
