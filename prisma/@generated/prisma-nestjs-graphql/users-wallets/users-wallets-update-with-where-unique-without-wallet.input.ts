import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsUpdateWithoutWalletInput } from './users-wallets-update-without-wallet.input';

@InputType()
export class UsersWalletsUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;

    @Field(() => UsersWalletsUpdateWithoutWalletInput, {nullable:false})
    data!: UsersWalletsUpdateWithoutWalletInput;
}
