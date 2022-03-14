import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumSlicesEnumFilter } from '../prisma/enum-slices-enum-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumCreditConfigurationStatusFilter } from '../prisma/enum-credit-configuration-status-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';
import { CreditListRelationFilter } from '../credit/credit-list-relation-filter.input';
import { CreditConfigurationsWalletsListRelationFilter } from '../credit-configurations-wallets/credit-configurations-wallets-list-relation-filter.input';
import { InstallmentListRelationFilter } from '../installment/installment-list-relation-filter.input';
import { CreditRequestRelationFilter } from '../credit-request/credit-request-relation-filter.input';

@InputType()
export class CreditConfigurationWhereInput {

    @Field(() => [CreditConfigurationWhereInput], {nullable:true})
    AND?: Array<CreditConfigurationWhereInput>;

    @Field(() => [CreditConfigurationWhereInput], {nullable:true})
    OR?: Array<CreditConfigurationWhereInput>;

    @Field(() => [CreditConfigurationWhereInput], {nullable:true})
    NOT?: Array<CreditConfigurationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    shouldPayDeposit?: BoolNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    depositPercentage?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => EnumSlicesEnumFilter, {nullable:true})
    slices?: EnumSlicesEnumFilter;

    @Field(() => FloatFilter, {nullable:true})
    seviFeesPercentage?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    daysToStartAfterDelivery?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    lateInstallmentFeesPercentage?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    affiliatePercentage?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    creditLateFeesPercentage?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    creditLateDays?: FloatFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => EnumCreditConfigurationStatusFilter, {nullable:true})
    status?: EnumCreditConfigurationStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    numberOfAllowedCredits?: IntFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    fundFeesPercentage?: FloatNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    fundId?: StringFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    wallet?: WalletRelationFilter;

    @Field(() => CreditListRelationFilter, {nullable:true})
    credit?: CreditListRelationFilter;

    @Field(() => CreditConfigurationsWalletsListRelationFilter, {nullable:true})
    attachedWallets?: CreditConfigurationsWalletsListRelationFilter;

    @Field(() => InstallmentListRelationFilter, {nullable:true})
    Installment?: InstallmentListRelationFilter;

    @Field(() => CreditRequestRelationFilter, {nullable:true})
    creditRequests?: CreditRequestRelationFilter;
}
