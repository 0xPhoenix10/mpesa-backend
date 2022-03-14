import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsCreateInput } from './users-wallets-create.input';
import { UsersWalletsUpdateInput } from './users-wallets-update.input';

@ArgsType()
export class UpsertOneUsersWalletsArgs {

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;

    @Field(() => UsersWalletsCreateInput, {nullable:false})
    create!: UsersWalletsCreateInput;

    @Field(() => UsersWalletsUpdateInput, {nullable:false})
    update!: UsersWalletsUpdateInput;
}
