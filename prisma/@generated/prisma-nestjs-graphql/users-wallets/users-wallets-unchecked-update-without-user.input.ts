import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumWalletRoleFieldUpdateOperationsInput } from '../prisma/enum-wallet-role-field-update-operations.input';

@InputType()
export class UsersWalletsUncheckedUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    walletId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumWalletRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumWalletRoleFieldUpdateOperationsInput;
}
