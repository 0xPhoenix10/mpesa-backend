import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CreditConfigurationOrderByWithRelationInput } from '../credit-configuration/credit-configuration-order-by-with-relation.input';
import { CreditOrderByWithRelationInput } from '../credit/credit-order-by-with-relation.input';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';
import { OrderOrderByWithRelationInput } from '../order/order-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class InstallmentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    debtorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstTryFailedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountWithPenalty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seviFees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    penalty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditConfigurationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliateFees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => CreditConfigurationOrderByWithRelationInput, {nullable:true})
    creditConfiguration?: CreditConfigurationOrderByWithRelationInput;

    @Field(() => CreditOrderByWithRelationInput, {nullable:true})
    credit?: CreditOrderByWithRelationInput;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    creditor?: WalletOrderByWithRelationInput;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    debtor?: WalletOrderByWithRelationInput;

    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: OrderOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;
}
