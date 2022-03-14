import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsWalletIdUserIdCompoundUniqueInput } from './users-wallets-wallet-id-user-id-compound-unique.input';

@InputType()
export class UsersWalletsWhereUniqueInput {

    @Field(() => UsersWalletsWalletIdUserIdCompoundUniqueInput, {nullable:true})
    walletId_userId?: UsersWalletsWalletIdUserIdCompoundUniqueInput;
}
