import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutUsersWalletsInput } from './wallet-create-without-users-wallets.input';
import { WalletCreateOrConnectWithoutUsersWalletsInput } from './wallet-create-or-connect-without-users-wallets.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutUsersWalletsInput {

    @Field(() => WalletCreateWithoutUsersWalletsInput, {nullable:true})
    create?: WalletCreateWithoutUsersWalletsInput;

    @Field(() => WalletCreateOrConnectWithoutUsersWalletsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutUsersWalletsInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
