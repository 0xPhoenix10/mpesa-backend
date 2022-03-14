import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutUsersWalletsInput } from './wallet-create-without-users-wallets.input';

@InputType()
export class WalletCreateOrConnectWithoutUsersWalletsInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutUsersWalletsInput, {nullable:false})
    create!: WalletCreateWithoutUsersWalletsInput;
}
