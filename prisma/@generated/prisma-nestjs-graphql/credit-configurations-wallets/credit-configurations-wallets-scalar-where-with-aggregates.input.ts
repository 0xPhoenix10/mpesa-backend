import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class CreditConfigurationsWalletsScalarWhereWithAggregatesInput {

    @Field(() => [CreditConfigurationsWalletsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CreditConfigurationsWalletsScalarWhereWithAggregatesInput>;

    @Field(() => [CreditConfigurationsWalletsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CreditConfigurationsWalletsScalarWhereWithAggregatesInput>;

    @Field(() => [CreditConfigurationsWalletsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CreditConfigurationsWalletsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    configurationId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    walletId?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    upfrontPercentage?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    fundFeesPercentage?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    maxOrderAmount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    maxOutstandingCredit?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    shareFeesPercentage?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    postDeliveryPercentage?: FloatWithAggregatesFilter;
}
