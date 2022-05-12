import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumCurrencyEnumNullableWithAggregatesFilter } from '../prisma/enum-currency-enum-nullable-with-aggregates-filter.input';
import { EnumcreditRefTypeNullableWithAggregatesFilter } from '../prisma/enumcredit-ref-type-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumcreditStatusEnumNullableWithAggregatesFilter } from '../prisma/enumcredit-status-enum-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumSlicesEnumWithAggregatesFilter } from '../prisma/enum-slices-enum-with-aggregates-filter.input';

@InputType()
export class CreditScalarWhereWithAggregatesInput {

    @Field(() => [CreditScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CreditScalarWhereWithAggregatesInput>;

    @Field(() => [CreditScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CreditScalarWhereWithAggregatesInput>;

    @Field(() => [CreditScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CreditScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    typeId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumCurrencyEnumNullableWithAggregatesFilter, {nullable:true})
    currency?: EnumCurrencyEnumNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    orderId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumcreditRefTypeNullableWithAggregatesFilter, {nullable:true})
    type?: EnumcreditRefTypeNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    amount?: FloatNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    debtorId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    creditorId?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    installmentsCount?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    installmentsCountPaid?: IntNullableWithAggregatesFilter;

    @Field(() => EnumcreditStatusEnumNullableWithAggregatesFilter, {nullable:true})
    status?: EnumcreditStatusEnumNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    totalPaid?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    totalToPay?: FloatNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    agreedDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    referenceNumber?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    creditConfigurationId?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    paidAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    duration?: IntNullableWithAggregatesFilter;

    @Field(() => EnumSlicesEnumWithAggregatesFilter, {nullable:true})
    durationSlices?: EnumSlicesEnumWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    affiliateId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    defaultAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    fundUpfrontAmount?: FloatNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    orderWalletId?: StringNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    fundFeesAmount?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    amountWithFees?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    payNowAmount?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    seviFeesAmount?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    orderWalletShareFeesAmount?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    fundPostDeliveryAmount?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    payLaterAmount?: FloatNullableWithAggregatesFilter;
}
