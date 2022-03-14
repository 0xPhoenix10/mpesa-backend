import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';

@InputType()
export class CreditConfigurationsWalletsScalarWhereInput {

    @Field(() => [CreditConfigurationsWalletsScalarWhereInput], {nullable:true})
    AND?: Array<CreditConfigurationsWalletsScalarWhereInput>;

    @Field(() => [CreditConfigurationsWalletsScalarWhereInput], {nullable:true})
    OR?: Array<CreditConfigurationsWalletsScalarWhereInput>;

    @Field(() => [CreditConfigurationsWalletsScalarWhereInput], {nullable:true})
    NOT?: Array<CreditConfigurationsWalletsScalarWhereInput>;

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
}
