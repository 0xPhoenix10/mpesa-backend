import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsCreateWithoutWalletInput } from './users-wallets-create-without-wallet.input';
import { UsersWalletsCreateOrConnectWithoutWalletInput } from './users-wallets-create-or-connect-without-wallet.input';
import { UsersWalletsCreateManyWalletInputEnvelope } from './users-wallets-create-many-wallet-input-envelope.input';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';

@InputType()
export class UsersWalletsCreateNestedManyWithoutWalletInput {

    @Field(() => [UsersWalletsCreateWithoutWalletInput], {nullable:true})
    create?: Array<UsersWalletsCreateWithoutWalletInput>;

    @Field(() => [UsersWalletsCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<UsersWalletsCreateOrConnectWithoutWalletInput>;

    @Field(() => UsersWalletsCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: UsersWalletsCreateManyWalletInputEnvelope;

    @Field(() => [UsersWalletsWhereUniqueInput], {nullable:true})
    connect?: Array<UsersWalletsWhereUniqueInput>;
}
