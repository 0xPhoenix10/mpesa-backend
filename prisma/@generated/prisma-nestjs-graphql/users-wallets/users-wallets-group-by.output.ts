import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WalletRole } from '../prisma/wallet-role.enum';
import { UsersWalletsCountAggregate } from './users-wallets-count-aggregate.output';
import { UsersWalletsMinAggregate } from './users-wallets-min-aggregate.output';
import { UsersWalletsMaxAggregate } from './users-wallets-max-aggregate.output';

@ObjectType()
export class UsersWalletsGroupBy {

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    walletId!: string;

    @Field(() => WalletRole, {nullable:false})
    role!: keyof typeof WalletRole;

    @Field(() => UsersWalletsCountAggregate, {nullable:true})
    _count?: UsersWalletsCountAggregate;

    @Field(() => UsersWalletsMinAggregate, {nullable:true})
    _min?: UsersWalletsMinAggregate;

    @Field(() => UsersWalletsMaxAggregate, {nullable:true})
    _max?: UsersWalletsMaxAggregate;
}
