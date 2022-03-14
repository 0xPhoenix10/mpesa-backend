import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WalletWhereInput } from './wallet-where.input';
import { WalletOrderByWithRelationInput } from './wallet-order-by-with-relation.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WalletCountAggregateInput } from './wallet-count-aggregate.input';
import { WalletAvgAggregateInput } from './wallet-avg-aggregate.input';
import { WalletSumAggregateInput } from './wallet-sum-aggregate.input';
import { WalletMinAggregateInput } from './wallet-min-aggregate.input';
import { WalletMaxAggregateInput } from './wallet-max-aggregate.input';

@ArgsType()
export class WalletAggregateArgs {

    @Field(() => WalletWhereInput, {nullable:true})
    where?: WalletWhereInput;

    @Field(() => [WalletOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WalletOrderByWithRelationInput>;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    cursor?: WalletWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WalletCountAggregateInput, {nullable:true})
    _count?: WalletCountAggregateInput;

    @Field(() => WalletAvgAggregateInput, {nullable:true})
    _avg?: WalletAvgAggregateInput;

    @Field(() => WalletSumAggregateInput, {nullable:true})
    _sum?: WalletSumAggregateInput;

    @Field(() => WalletMinAggregateInput, {nullable:true})
    _min?: WalletMinAggregateInput;

    @Field(() => WalletMaxAggregateInput, {nullable:true})
    _max?: WalletMaxAggregateInput;
}
