import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutUsersWalletsInput } from './wallet-update-without-users-wallets.input';
import { WalletCreateWithoutUsersWalletsInput } from './wallet-create-without-users-wallets.input';

@InputType()
export class WalletUpsertWithoutUsersWalletsInput {

    @Field(() => WalletUpdateWithoutUsersWalletsInput, {nullable:false})
    update!: WalletUpdateWithoutUsersWalletsInput;

    @Field(() => WalletCreateWithoutUsersWalletsInput, {nullable:false})
    create!: WalletCreateWithoutUsersWalletsInput;
}
