import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class VisitScalarWhereWithAggregatesInput {

    @Field(() => [VisitScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VisitScalarWhereWithAggregatesInput>;

    @Field(() => [VisitScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VisitScalarWhereWithAggregatesInput>;

    @Field(() => [VisitScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VisitScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    account?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    visitedBy?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    visitedByReference?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    whenVisitTookPlace?: DateTimeNullableWithAggregatesFilter;
}
