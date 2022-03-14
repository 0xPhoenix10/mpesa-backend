import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SettingsMinOrderByAggregateInput {

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
}
