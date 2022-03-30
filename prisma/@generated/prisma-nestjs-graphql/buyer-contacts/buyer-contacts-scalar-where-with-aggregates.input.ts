import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class BuyerContactsScalarWhereWithAggregatesInput {

    @Field(() => [BuyerContactsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BuyerContactsScalarWhereWithAggregatesInput>;

    @Field(() => [BuyerContactsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BuyerContactsScalarWhereWithAggregatesInput>;

    @Field(() => [BuyerContactsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BuyerContactsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    walletId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
