import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { CreditConfigurationRelationFilter } from '../credit-configuration/credit-configuration-relation-filter.input';

@InputType()
export class CreditConfigurationsWalletsWhereInput {

    @Field(() => [CreditConfigurationsWalletsWhereInput], {nullable:true})
    AND?: Array<CreditConfigurationsWalletsWhereInput>;

    @Field(() => [CreditConfigurationsWalletsWhereInput], {nullable:true})
    OR?: Array<CreditConfigurationsWalletsWhereInput>;

    @Field(() => [CreditConfigurationsWalletsWhereInput], {nullable:true})
    NOT?: Array<CreditConfigurationsWalletsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    configurationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    walletId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    upfrontPercentage?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    fundFeesPercentage?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    maxOrderAmount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    maxOutstandingCredit?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    shareFeesPercentage?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    postDeliveryPercentage?: FloatFilter;

    @Field(() => CreditConfigurationRelationFilter, {nullable:true})
    configuration?: CreditConfigurationRelationFilter;
}
