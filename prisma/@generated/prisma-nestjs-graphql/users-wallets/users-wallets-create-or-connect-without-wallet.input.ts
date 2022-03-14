import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsCreateWithoutWalletInput } from './users-wallets-create-without-wallet.input';

@InputType()
export class UsersWalletsCreateOrConnectWithoutWalletInput {

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;

    @Field(() => UsersWalletsCreateWithoutWalletInput, {nullable:false})
    create!: UsersWalletsCreateWithoutWalletInput;
}
