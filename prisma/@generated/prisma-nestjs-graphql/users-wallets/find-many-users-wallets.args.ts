import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsWhereInput } from './users-wallets-where.input';
import { UsersWalletsOrderByWithRelationInput } from './users-wallets-order-by-with-relation.input';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsersWalletsScalarFieldEnum } from './users-wallets-scalar-field.enum';

@ArgsType()
export class FindManyUsersWalletsArgs {

    @Field(() => UsersWalletsWhereInput, {nullable:true})
    where?: UsersWalletsWhereInput;

    @Field(() => [UsersWalletsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsersWalletsOrderByWithRelationInput>;

    @Field(() => UsersWalletsWhereUniqueInput, {nullable:true})
    cursor?: UsersWalletsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UsersWalletsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UsersWalletsScalarFieldEnum>;
}
