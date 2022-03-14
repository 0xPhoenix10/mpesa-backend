import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumCreditRequestStatusWithAggregatesFilter } from '../prisma/enum-credit-request-status-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CreditRequestScalarWhereWithAggregatesInput {

    @Field(() => [CreditRequestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CreditRequestScalarWhereWithAggregatesInput>;

    @Field(() => [CreditRequestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CreditRequestScalarWhereWithAggregatesInput>;

    @Field(() => [CreditRequestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CreditRequestScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumCreditRequestStatusWithAggregatesFilter, {nullable:true})
    status?: EnumCreditRequestStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    orderId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    wallet?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    creditConfigurationId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    proceedAt?: DateTimeWithAggregatesFilter;
}
