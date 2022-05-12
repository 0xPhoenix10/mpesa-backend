import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCurrencyEnumNullableFilter } from '../prisma/enum-currency-enum-nullable-filter.input';
import { EnumcreditRefTypeNullableFilter } from '../prisma/enumcredit-ref-type-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumcreditStatusEnumNullableFilter } from '../prisma/enumcredit-status-enum-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumSlicesEnumFilter } from '../prisma/enum-slices-enum-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CreditConfigurationRelationFilter } from '../credit-configuration/credit-configuration-relation-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';
import { InstallmentListRelationFilter } from '../installment/installment-list-relation-filter.input';

@InputType()
export class CreditWhereInput {

    @Field(() => [CreditWhereInput], {nullable:true})
    AND?: Array<CreditWhereInput>;

    @Field(() => [CreditWhereInput], {nullable:true})
    OR?: Array<CreditWhereInput>;

    @Field(() => [CreditWhereInput], {nullable:true})
    NOT?: Array<CreditWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    typeId?: StringNullableFilter;

    @Field(() => EnumCurrencyEnumNullableFilter, {nullable:true})
    currency?: EnumCurrencyEnumNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => EnumcreditRefTypeNullableFilter, {nullable:true})
    type?: EnumcreditRefTypeNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    amount?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    debtorId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    creditorId?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    installmentsCount?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    installmentsCountPaid?: IntNullableFilter;

    @Field(() => EnumcreditStatusEnumNullableFilter, {nullable:true})
    status?: EnumcreditStatusEnumNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    totalPaid?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    totalToPay?: FloatNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    agreedDate?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    referenceNumber?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    creditConfigurationId?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    paidAt?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    duration?: IntNullableFilter;

    @Field(() => EnumSlicesEnumFilter, {nullable:true})
    durationSlices?: EnumSlicesEnumFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    affiliateId?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    defaultAt?: DateTimeNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    fundUpfrontAmount?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderWalletId?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    fundFeesAmount?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    amountWithFees?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    payNowAmount?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    seviFeesAmount?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    orderWalletShareFeesAmount?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    fundPostDeliveryAmount?: FloatNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    affiliate?: UserRelationFilter;

    @Field(() => CreditConfigurationRelationFilter, {nullable:true})
    creditConfiguration?: CreditConfigurationRelationFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    creditor?: WalletRelationFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    debtor?: WalletRelationFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => InstallmentListRelationFilter, {nullable:true})
    installments?: InstallmentListRelationFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    payLaterAmount?: FloatNullableFilter;
}
