import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WalletRole } from '../prisma/wallet-role.enum';

@ObjectType()
export class UsersWalletsMinAggregate {

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => String, {nullable:true})
    walletId?: string;

    @Field(() => WalletRole, {nullable:true})
    role?: keyof typeof WalletRole;
}
