import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRole } from '../prisma/wallet-role.enum';
import { WalletCreateNestedOneWithoutUsersWalletsInput } from '../wallet/wallet-create-nested-one-without-users-wallets.input';

@InputType()
export class UsersWalletsCreateWithoutUserInput {

    @Field(() => WalletRole, {nullable:true})
    role?: keyof typeof WalletRole;

    @Field(() => WalletCreateNestedOneWithoutUsersWalletsInput, {nullable:false})
    wallet!: WalletCreateNestedOneWithoutUsersWalletsInput;
}
