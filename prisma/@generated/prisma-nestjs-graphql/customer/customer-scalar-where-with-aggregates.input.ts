import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CustomerScalarWhereWithAggregatesInput {

    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CustomerScalarWhereWithAggregatesInput>;

    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CustomerScalarWhereWithAggregatesInput>;

    @Field(() => [CustomerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CustomerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    customerId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    vendorId?: StringWithAggregatesFilter;
}
