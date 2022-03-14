import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsUpdateInput } from './users-wallets-update.input';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';

@ArgsType()
export class UpdateOneUsersWalletsArgs {

    @Field(() => UsersWalletsUpdateInput, {nullable:false})
    data!: UsersWalletsUpdateInput;

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;
}
