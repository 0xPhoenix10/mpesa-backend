import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { UsersWalletsUpdateWithoutWalletInput } from './users-wallets-update-without-wallet.input';
import { UsersWalletsCreateWithoutWalletInput } from './users-wallets-create-without-wallet.input';

@InputType()
export class UsersWalletsUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:false})
    where!: UsersWalletsWhereUniqueInput;

    @Field(() => UsersWalletsUpdateWithoutWalletInput, {nullable:false})
    update!: UsersWalletsUpdateWithoutWalletInput;

    @Field(() => UsersWalletsCreateWithoutWalletInput, {nullable:false})
    create!: UsersWalletsCreateWithoutWalletInput;
}
