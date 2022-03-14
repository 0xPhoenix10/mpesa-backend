import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WalletRole } from '../prisma/wallet-role.enum';
import { User } from '../user/user.model';
import { Wallet } from '../wallet/wallet.model';

@ObjectType()
export class UsersWallets {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    walletId!: string;

    @Field(() => WalletRole, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof WalletRole;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;
}
