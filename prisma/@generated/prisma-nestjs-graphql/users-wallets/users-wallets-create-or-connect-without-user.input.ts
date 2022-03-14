import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsCreateWithoutUserInput } from './users-wallets-create-without-user.input';

@InputType()
export class UsersWalletsCreateOrConnectWithoutUserInput {

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;

    @Field(() => UsersWalletsCreateWithoutUserInput, {nullable:false})
    create!: UsersWalletsCreateWithoutUserInput;
}
