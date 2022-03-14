import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumWalletRoleFieldUpdateOperationsInput } from '../prisma/enum-wallet-role-field-update-operations.input';
import { UserUpdateOneRequiredWithoutUsersWalletsInput } from '../user/user-update-one-required-without-users-wallets.input';

@InputType()
export class UsersWalletsUpdateWithoutWalletInput {

    @Field(() => EnumWalletRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumWalletRoleFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutUsersWalletsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUsersWalletsInput;
}
