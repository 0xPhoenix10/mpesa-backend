import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumWalletRoleFieldUpdateOperationsInput } from '../prisma/enum-wallet-role-field-update-operations.input';

@InputType()
export class UsersWalletsUpdateManyMutationInput {

    @Field(() => EnumWalletRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumWalletRoleFieldUpdateOperationsInput;
}
