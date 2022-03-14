import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumActivityEntityTypeNullableFilter } from '../prisma/enum-activity-entity-type-nullable-filter.input';
import { EnumActivityPriorityNullableFilter } from '../prisma/enum-activity-priority-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ActivityScalarWhereInput {

    @Field(() => [ActivityScalarWhereInput], {nullable:true})
    AND?: Array<ActivityScalarWhereInput>;

    @Field(() => [ActivityScalarWhereInput], {nullable:true})
    OR?: Array<ActivityScalarWhereInput>;

    @Field(() => [ActivityScalarWhereInput], {nullable:true})
    NOT?: Array<ActivityScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    entityId?: StringNullableFilter;

    @Field(() => EnumActivityEntityTypeNullableFilter, {nullable:true})
    entityType?: EnumActivityEntityTypeNullableFilter;

    @Field(() => EnumActivityPriorityNullableFilter, {nullable:true})
    priority?: EnumActivityPriorityNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    message?: JsonNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isRead?: BoolNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    entity?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;
}
