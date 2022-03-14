import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutUsersWalletsInput } from './wallet-create-without-users-wallets.input';
import { WalletCreateOrConnectWithoutUsersWalletsInput } from './wallet-create-or-connect-without-users-wallets.input';
import { WalletUpsertWithoutUsersWalletsInput } from './wallet-upsert-without-users-wallets.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutUsersWalletsInput } from './wallet-update-without-users-wallets.input';

@InputType()
export class WalletUpdateOneRequiredWithoutUsersWalletsInput {

    @Field(() => WalletCreateWithoutUsersWalletsInput, {nullable:true})
    create?: WalletCreateWithoutUsersWalletsInput;

    @Field(() => WalletCreateOrConnectWithoutUsersWalletsInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutUsersWalletsInput;

    @Field(() => WalletUpsertWithoutUsersWalletsInput, {nullable:true})
    upsert?: WalletUpsertWithoutUsersWalletsInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutUsersWalletsInput, {nullable:true})
    update?: WalletUpdateWithoutUsersWalletsInput;
}
