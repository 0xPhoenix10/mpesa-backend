import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class BlacklistScalarWhereWithAggregatesInput {

    @Field(() => [BlacklistScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BlacklistScalarWhereWithAggregatesInput>;

    @Field(() => [BlacklistScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BlacklistScalarWhereWithAggregatesInput>;

    @Field(() => [BlacklistScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BlacklistScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    taxId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    documentId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;
}
