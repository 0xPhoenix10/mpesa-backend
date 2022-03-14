import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsersWalletsCountAggregate } from './users-wallets-count-aggregate.output';
import { UsersWalletsMinAggregate } from './users-wallets-min-aggregate.output';
import { UsersWalletsMaxAggregate } from './users-wallets-max-aggregate.output';

@ObjectType()
export class AggregateUsersWallets {

    @Field(() => UsersWalletsCountAggregate, {nullable:true})
    _count?: UsersWalletsCountAggregate;

    @Field(() => UsersWalletsMinAggregate, {nullable:true})
    _min?: UsersWalletsMinAggregate;

    @Field(() => UsersWalletsMaxAggregate, {nullable:true})
    _max?: UsersWalletsMaxAggregate;
}
