import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SettlementCountOrderByAggregateInput } from './settlement-count-order-by-aggregate.input';
import { SettlementMaxOrderByAggregateInput } from './settlement-max-order-by-aggregate.input';
import { SettlementMinOrderByAggregateInput } from './settlement-min-order-by-aggregate.input';

@InputType()
export class SettlementOrderByWithAggregationInput {

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

    @Field(() => SettlementCountOrderByAggregateInput, {nullable:true})
    _count?: SettlementCountOrderByAggregateInput;

    @Field(() => SettlementMaxOrderByAggregateInput, {nullable:true})
    _max?: SettlementMaxOrderByAggregateInput;

    @Field(() => SettlementMinOrderByAggregateInput, {nullable:true})
    _min?: SettlementMinOrderByAggregateInput;
}
