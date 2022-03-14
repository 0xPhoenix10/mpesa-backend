import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsCreateInput } from './users-wallets-create.input';

@ArgsType()
export class CreateOneUsersWalletsArgs {

    @Field(() => UsersWalletsCreateInput, {nullable:false})
    data!: UsersWalletsCreateInput;
}
