import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityPriority } from './activity-priority.enum';
import { NestedEnumActivityPriorityNullableWithAggregatesFilter } from './nested-enum-activity-priority-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumActivityPriorityNullableFilter } from './nested-enum-activity-priority-nullable-filter.input';

@InputType()
export class EnumActivityPriorityNullableWithAggregatesFilter {

    @Field(() => ActivityPriority, {nullable:true})
    equals?: keyof typeof ActivityPriority;

    @Field(() => [ActivityPriority], {nullable:true})
    in?: Array<keyof typeof ActivityPriority>;

    @Field(() => [ActivityPriority], {nullable:true})
    notIn?: Array<keyof typeof ActivityPriority>;

    @Field(() => NestedEnumActivityPriorityNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActivityPriorityNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumActivityPriorityNullableFilter, {nullable:true})
    _min?: NestedEnumActivityPriorityNullableFilter;

    @Field(() => NestedEnumActivityPriorityNullableFilter, {nullable:true})
    _max?: NestedEnumActivityPriorityNullableFilter;
}
