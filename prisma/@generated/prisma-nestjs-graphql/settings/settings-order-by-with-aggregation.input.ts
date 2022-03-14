import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SettingsCountOrderByAggregateInput } from './settings-count-order-by-aggregate.input';
import { SettingsMaxOrderByAggregateInput } from './settings-max-order-by-aggregate.input';
import { SettingsMinOrderByAggregateInput } from './settings-min-order-by-aggregate.input';

@InputType()
export class SettingsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    woocommerceUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    woocommerceConsumerKey?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    woocommerceActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    woocommerceConsumerSecret?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    walletAccount?: keyof typeof SortOrder;

    @Field(() => SettingsCountOrderByAggregateInput, {nullable:true})
    _count?: SettingsCountOrderByAggregateInput;

    @Field(() => SettingsMaxOrderByAggregateInput, {nullable:true})
    _max?: SettingsMaxOrderByAggregateInput;

    @Field(() => SettingsMinOrderByAggregateInput, {nullable:true})
    _min?: SettingsMinOrderByAggregateInput;
}
