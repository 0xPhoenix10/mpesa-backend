import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { BillingOrderByWithRelationInput } from '../billing/billing-order-by-with-relation.input';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';
import { ShippingOrderByWithRelationInput } from '../shipping/shipping-order-by-with-relation.input';
import { CreditOrderByWithRelationInput } from '../credit/credit-order-by-with-relation.input';
import { InstallmentOrderByRelationAggregateInput } from '../installment/installment-order-by-relation-aggregate.input';
import { CreditRequestOrderByWithRelationInput } from '../credit-request/credit-request-order-by-with-relation.input';

@InputType()
export class OrderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vendorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    affiliateId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    products?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    items?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deliveryCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentStatus?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    paymentMethod?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    billingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shippingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ecommercePlatform?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    platformId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referenceNumber?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    affiliate?: UserOrderByWithRelationInput;

    @Field(() => BillingOrderByWithRelationInput, {nullable:true})
    billing?: BillingOrderByWithRelationInput;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    customer?: WalletOrderByWithRelationInput;

    @Field(() => ShippingOrderByWithRelationInput, {nullable:true})
    shipping?: ShippingOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    vendorWallet?: WalletOrderByWithRelationInput;

    @Field(() => CreditOrderByWithRelationInput, {nullable:true})
    credit?: CreditOrderByWithRelationInput;

    @Field(() => InstallmentOrderByRelationAggregateInput, {nullable:true})
    installments?: InstallmentOrderByRelationAggregateInput;

    @Field(() => CreditRequestOrderByWithRelationInput, {nullable:true})
    creditRequest?: CreditRequestOrderByWithRelationInput;
}
