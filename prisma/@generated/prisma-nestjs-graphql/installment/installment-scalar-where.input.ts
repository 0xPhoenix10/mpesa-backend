import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnuminstallmentStatusTypeEnumNullableFilter } from '../prisma/enuminstallment-status-type-enum-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumCurrencyEnumNullableFilter } from '../prisma/enum-currency-enum-nullable-filter.input';

@InputType()
export class InstallmentScalarWhereInput {

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    AND?: Array<InstallmentScalarWhereInput>;

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    OR?: Array<InstallmentScalarWhereInput>;

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    NOT?: Array<InstallmentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    installmentCount?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    referenceNumber?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    debtorId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    creditorId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => EnuminstallmentStatusTypeEnumNullableFilter, {nullable:true})
    status?: EnuminstallmentStatusTypeEnumNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    firstTryFailedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    creditId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    amountWithPenalty?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    seviFees?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    penalty?: FloatFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    paidAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    creditConfigurationId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    affiliateFees?: FloatFilter;

    @Field(() => EnumCurrencyEnumNullableFilter, {nullable:true})
    currency?: EnumCurrencyEnumNullableFilter;
}
