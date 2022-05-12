import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CreditConfigurationOrderByWithRelationInput } from '../credit-configuration/credit-configuration-order-by-with-relation.input';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';
import { OrderOrderByWithRelationInput } from '../order/order-order-by-with-relation.input';
import { InstallmentOrderByRelationAggregateInput } from '../installment/installment-order-by-relation-aggregate.input';

@InputType()
export class CreditOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    debtorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentsCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    installmentsCountPaid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalPaid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalToPay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agreedDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    creditConfigurationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paidAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    durationSlices?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    defaultAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundUpfrontAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderWalletId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amountWithFees?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payNowAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seviFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderWalletShareFeesAmount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fundPostDeliveryAmount?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    affiliate?: UserOrderByWithRelationInput;

    @Field(() => CreditConfigurationOrderByWithRelationInput, {nullable:true})
    creditConfiguration?: CreditConfigurationOrderByWithRelationInput;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    creditor?: WalletOrderByWithRelationInput;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    debtor?: WalletOrderByWithRelationInput;

    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: OrderOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => InstallmentOrderByRelationAggregateInput, {nullable:true})
    installments?: InstallmentOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    payLaterAmount?: keyof typeof SortOrder;
}
