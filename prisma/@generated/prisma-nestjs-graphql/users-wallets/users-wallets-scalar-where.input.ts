import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumWalletRoleFilter } from '../prisma/enum-wallet-role-filter.input';

@InputType()
export class UsersWalletsScalarWhereInput {

    @Field(() => [UsersWalletsScalarWhereInput], {nullable:true})
    AND?: Array<UsersWalletsScalarWhereInput>;

    @Field(() => [UsersWalletsScalarWhereInput], {nullable:true})
    OR?: Array<UsersWalletsScalarWhereInput>;

    @Field(() => [UsersWalletsScalarWhereInput], {nullable:true})
    NOT?: Array<UsersWalletsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    walletId?: StringFilter;

    @Field(() => EnumWalletRoleFilter, {nullable:true})
    role?: EnumWalletRoleFilter;
}
