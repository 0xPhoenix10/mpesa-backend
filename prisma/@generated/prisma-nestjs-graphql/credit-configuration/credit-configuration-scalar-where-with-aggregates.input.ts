import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumSlicesEnumWithAggregatesFilter } from '../prisma/enum-slices-enum-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumCreditConfigurationStatusWithAggregatesFilter } from '../prisma/enum-credit-configuration-status-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';

@InputType()
export class CreditConfigurationScalarWhereWithAggregatesInput {

    @Field(() => [CreditConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CreditConfigurationScalarWhereWithAggregatesInput>;

    @Field(() => [CreditConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CreditConfigurationScalarWhereWithAggregatesInput>;

    @Field(() => [CreditConfigurationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CreditConfigurationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    shouldPayDeposit?: BoolNullableWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    depositPercentage?: FloatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    duration?: IntWithAggregatesFilter;

    @Field(() => EnumSlicesEnumWithAggregatesFilter, {nullable:true})
    slices?: EnumSlicesEnumWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    seviFeesPercentage?: FloatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    daysToStartAfterDelivery?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    lateInstallmentFeesPercentage?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    affiliatePercentage?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    creditLateFeesPercentage?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    creditLateDays?: FloatWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => EnumCreditConfigurationStatusWithAggregatesFilter, {nullable:true})
    status?: EnumCreditConfigurationStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    numberOfAllowedCredits?: IntWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    fundFeesPercentage?: FloatNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    fundId?: StringWithAggregatesFilter;
}
