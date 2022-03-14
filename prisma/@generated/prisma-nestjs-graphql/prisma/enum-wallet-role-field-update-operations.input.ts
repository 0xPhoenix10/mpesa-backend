import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRole } from './wallet-role.enum';

@InputType()
export class EnumWalletRoleFieldUpdateOperationsInput {

    @Field(() => WalletRole, {nullable:true})
    set?: keyof typeof WalletRole;
}
