import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWalletsWhereInput } from './users-wallets-where.input';
import { UsersWalletsOrderByWithAggregationInput } from './users-wallets-order-by-with-aggregation.input';
import { UsersWalletsScalarFieldEnum } from './users-wallets-scalar-field.enum';
import { UsersWalletsScalarWhereWithAggregatesInput } from './users-wallets-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UsersWalletsCountAggregateInput } from './users-wallets-count-aggregate.input';
import { UsersWalletsMinAggregateInput } from './users-wallets-min-aggregate.input';
import { UsersWalletsMaxAggregateInput } from './users-wallets-max-aggregate.input';

@ArgsType()
export class UsersWalletsGroupByArgs {

    @Field(() => UsersWalletsWhereInput, {nullable:true})
    where?: UsersWalletsWhereInput;

    @Field(() => [UsersWalletsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UsersWalletsOrderByWithAggregationInput>;

    @Field(() => [UsersWalletsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UsersWalletsScalarFieldEnum>;

    @Field(() => UsersWalletsScalarWhereWithAggregatesInput, {nullable:true})
    having?: UsersWalletsScalarWhereWithAggregatesInput;

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
