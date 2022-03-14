import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumWalletRoleWithAggregatesFilter } from '../prisma/enum-wallet-role-with-aggregates-filter.input';

@InputType()
export class UsersWalletsScalarWhereWithAggregatesInput {

    @Field(() => [UsersWalletsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UsersWalletsScalarWhereWithAggregatesInput>;

    @Field(() => [UsersWalletsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UsersWalletsScalarWhereWithAggregatesInput>;

    @Field(() => [UsersWalletsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UsersWalletsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    walletId?: StringWithAggregatesFilter;

    @Field(() => EnumWalletRoleWithAggregatesFilter, {nullable:true})
    role?: EnumWalletRoleWithAggregatesFilter;
}
