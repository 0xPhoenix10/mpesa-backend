import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { WalletOrderByRelationAggregateInput } from '../wallet/wallet-order-by-relation-aggregate.input';

@InputType()
export class SettlementOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bankAccount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bankAccountName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bankBranch?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bankName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tillNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paybillNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    verifiedByUser?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdByAgent?: keyof typeof SortOrder;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    wallet?: WalletOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    settlementCreator?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    settlementVerifier?: UserOrderByWithRelationInput;

    @Field(() => WalletOrderByRelationAggregateInput, {nullable:true})
    Wallet?: WalletOrderByRelationAggregateInput;
}
