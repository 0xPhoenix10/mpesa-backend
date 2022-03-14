import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumActivityEntityTypeNullableWithAggregatesFilter } from '../prisma/enum-activity-entity-type-nullable-with-aggregates-filter.input';
import { EnumActivityPriorityNullableWithAggregatesFilter } from '../prisma/enum-activity-priority-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ActivityScalarWhereWithAggregatesInput {

    @Field(() => [ActivityScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActivityScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActivityScalarWhereWithAggregatesInput>;

    @Field(() => [ActivityScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActivityScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    entityId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumActivityEntityTypeNullableWithAggregatesFilter, {nullable:true})
    entityType?: EnumActivityEntityTypeNullableWithAggregatesFilter;

    @Field(() => EnumActivityPriorityNullableWithAggregatesFilter, {nullable:true})
    priority?: EnumActivityPriorityNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phoneNumber?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    message?: JsonNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isRead?: BoolNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    entity?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;
}
