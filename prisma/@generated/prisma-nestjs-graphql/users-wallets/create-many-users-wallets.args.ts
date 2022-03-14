import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsCreateManyInput } from './users-wallets-create-many.input';

@ArgsType()
export class CreateManyUsersWalletsArgs {

    @Field(() => [UsersWalletsCreateManyInput], {nullable:false})
    data!: Array<UsersWalletsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
