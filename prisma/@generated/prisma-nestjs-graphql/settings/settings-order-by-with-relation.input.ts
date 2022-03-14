import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';

@InputType()
export class SettingsOrderByWithRelationInput {

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

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    wallet?: WalletOrderByWithRelationInput;
}
