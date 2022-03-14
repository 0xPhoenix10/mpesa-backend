import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRole } from '../prisma/wallet-role.enum';
import { UserCreateNestedOneWithoutUsersWalletsInput } from '../user/user-create-nested-one-without-users-wallets.input';

@InputType()
export class UsersWalletsCreateWithoutWalletInput {

    @Field(() => WalletRole, {nullable:true})
    role?: keyof typeof WalletRole;

    @Field(() => UserCreateNestedOneWithoutUsersWalletsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUsersWalletsInput;
}
