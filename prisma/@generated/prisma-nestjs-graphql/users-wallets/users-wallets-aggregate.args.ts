import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsWhereInput } from './users-wallets-where.input';
import { UsersWalletsOrderByWithRelationInput } from './users-wallets-order-by-with-relation.input';
import { UsersWalletsWhereUniqueInput } from './users-wallets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsersWalletsCountAggregateInput } from './users-wallets-count-aggregate.input';
import { UsersWalletsMinAggregateInput } from './users-wallets-min-aggregate.input';
import { UsersWalletsMaxAggregateInput } from './users-wallets-max-aggregate.input';

@ArgsType()
export class UsersWalletsAggregateArgs {

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

    @Field(() => UsersWalletsCountAggregateInput, {nullable:true})
    _count?: UsersWalletsCountAggregateInput;

    @Field(() => UsersWalletsMinAggregateInput, {nullable:true})
    _min?: UsersWalletsMinAggregateInput;

    @Field(() => UsersWalletsMaxAggregateInput, {nullable:true})
    _max?: UsersWalletsMaxAggregateInput;
}
