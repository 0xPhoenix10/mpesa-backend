import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersWalletsWhereInput } from './users-wallets-where.input';

@InputType()
export class UsersWalletsListRelationFilter {

    @Field(() => UsersWalletsWhereInput, {nullable:true})
    every?: UsersWalletsWhereInput;

    @Field(() => UsersWalletsWhereInput, {nullable:true})
    some?: UsersWalletsWhereInput;

    @Field(() => UsersWalletsWhereInput, {nullable:true})
    none?: UsersWalletsWhereInput;
}
