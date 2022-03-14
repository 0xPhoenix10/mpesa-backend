import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumJobStatusWithAggregatesFilter } from '../prisma/enum-job-status-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class JobScalarWhereWithAggregatesInput {

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => [JobScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<JobScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumJobStatusWithAggregatesFilter, {nullable:true})
    status?: EnumJobStatusWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
