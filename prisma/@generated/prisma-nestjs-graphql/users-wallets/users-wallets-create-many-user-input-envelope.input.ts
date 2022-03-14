import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsCreateManyUserInput } from './users-wallets-create-many-user.input';

@InputType()
export class UsersWalletsCreateManyUserInputEnvelope {

    @Field(() => [UsersWalletsCreateManyUserInput], {nullable:false})
    data!: Array<UsersWalletsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
