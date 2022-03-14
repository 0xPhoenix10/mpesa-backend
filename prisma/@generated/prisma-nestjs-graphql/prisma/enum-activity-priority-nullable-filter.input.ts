import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityPriority } from './activity-priority.enum';
import { NestedEnumActivityPriorityNullableFilter } from './nested-enum-activity-priority-nullable-filter.input';

@InputType()
export class EnumActivityPriorityNullableFilter {

    @Field(() => ActivityPriority, {nullable:true})
    equals?: keyof typeof ActivityPriority;

    @Field(() => [ActivityPriority], {nullable:true})
    in?: Array<keyof typeof ActivityPriority>;

    @Field(() => [ActivityPriority], {nullable:true})
    notIn?: Array<keyof typeof ActivityPriority>;

    @Field(() => NestedEnumActivityPriorityNullableFilter, {nullable:true})
    not?: NestedEnumActivityPriorityNullableFilter;
}
