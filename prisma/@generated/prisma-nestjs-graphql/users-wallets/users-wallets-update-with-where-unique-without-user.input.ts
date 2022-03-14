import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsUpdateWithoutUserInput } from './users-wallets-update-without-user.input';

@InputType()
export class UsersWalletsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;

    @Field(() => UsersWalletsUpdateWithoutUserInput, {nullable:false})
    data!: UsersWalletsUpdateWithoutUserInput;
}
