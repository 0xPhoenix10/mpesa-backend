import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsUpdateWithoutUserInput } from './users-wallets-update-without-user.input';
import { UsersWalletsCreateWithoutUserInput } from './users-wallets-create-without-user.input';

@InputType()
export class UsersWalletsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;

    @Field(() => UsersWalletsUpdateWithoutUserInput, {nullable:false})
    update!: UsersWalletsUpdateWithoutUserInput;

    @Field(() => UsersWalletsCreateWithoutUserInput, {nullable:false})
    create!: UsersWalletsCreateWithoutUserInput;
}
