import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersWalletsCountOrderByAggregateInput } from './users-wallets-count-order-by-aggregate.input';
import { UsersWalletsMaxOrderByAggregateInput } from './users-wallets-max-order-by-aggregate.input';
import { UsersWalletsMinOrderByAggregateInput } from './users-wallets-min-order-by-aggregate.input';

@InputType()
export class UsersWalletsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    walletId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => UsersWalletsCountOrderByAggregateInput, {nullable:true})
    _count?: UsersWalletsCountOrderByAggregateInput;

    @Field(() => UsersWalletsMaxOrderByAggregateInput, {nullable:true})
    _max?: UsersWalletsMaxOrderByAggregateInput;

    @Field(() => UsersWalletsMinOrderByAggregateInput, {nullable:true})
    _min?: UsersWalletsMinOrderByAggregateInput;
}
