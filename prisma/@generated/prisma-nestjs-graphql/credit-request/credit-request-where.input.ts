import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCreditRequestStatusFilter } from '../prisma/enum-credit-request-status-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';
import { CreditConfigurationRelationFilter } from '../credit-configuration/credit-configuration-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CreditRequestWhereInput {

    @Field(() => [CreditRequestWhereInput], {nullable:true})
    AND?: Array<CreditRequestWhereInput>;

    @Field(() => [CreditRequestWhereInput], {nullable:true})
    OR?: Array<CreditRequestWhereInput>;

    @Field(() => [CreditRequestWhereInput], {nullable:true})
    NOT?: Array<CreditRequestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumCreditRequestStatusFilter, {nullable:true})
    status?: EnumCreditRequestStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    wallet?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    creditConfigurationId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;

    @Field(() => CreditConfigurationRelationFilter, {nullable:true})
    creditConfiguration?: CreditConfigurationRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    proceedAt?: DateTimeFilter;
}
