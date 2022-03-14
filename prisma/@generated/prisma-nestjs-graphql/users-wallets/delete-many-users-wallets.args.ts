import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsWhereInput } from './users-wallets-where.input';

@ArgsType()
export class DeleteManyUsersWalletsArgs {

    @Field(() => UsersWalletsWhereInput, {nullable:true})
    where?: UsersWalletsWhereInput;
}
