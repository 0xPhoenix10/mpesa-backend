import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsUpdateManyMutationInput } from './users-wallets-update-many-mutation.input';
import { UsersWalletsWhereInput } from './users-wallets-where.input';

@ArgsType()
export class UpdateManyUsersWalletsArgs {

    @Field(() => UsersWalletsUpdateManyMutationInput, {nullable:false})
    data!: UsersWalletsUpdateManyMutationInput;

    @Field(() => UsersWalletsWhereInput, {nullable:true})
    where?: UsersWalletsWhereInput;
}
