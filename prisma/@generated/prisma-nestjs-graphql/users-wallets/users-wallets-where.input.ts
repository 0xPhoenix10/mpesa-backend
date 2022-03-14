import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumWalletRoleFilter } from '../prisma/enum-wallet-role-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';

@InputType()
export class UsersWalletsWhereInput {

    @Field(() => [UsersWalletsWhereInput], {nullable:true})
    AND?: Array<UsersWalletsWhereInput>;

    @Field(() => [UsersWalletsWhereInput], {nullable:true})
    OR?: Array<UsersWalletsWhereInput>;

    @Field(() => [UsersWalletsWhereInput], {nullable:true})
    NOT?: Array<UsersWalletsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    walletId?: StringFilter;

    @Field(() => EnumWalletRoleFilter, {nullable:true})
    role?: EnumWalletRoleFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;
}
