import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumWalletRoleFieldUpdateOperationsInput } from '../prisma/enum-wallet-role-field-update-operations.input';
import { WalletUpdateOneRequiredWithoutUsersWalletsInput } from '../wallet/wallet-update-one-required-without-users-wallets.input';

@InputType()
export class UsersWalletsUpdateWithoutUserInput {

    @Field(() => EnumWalletRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumWalletRoleFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneRequiredWithoutUsersWalletsInput, {nullable:true})
    wallet?: WalletUpdateOneRequiredWithoutUsersWalletsInput;
}
