import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';

@ArgsType()
export class DeleteOneUsersWalletsArgs {

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;
}
