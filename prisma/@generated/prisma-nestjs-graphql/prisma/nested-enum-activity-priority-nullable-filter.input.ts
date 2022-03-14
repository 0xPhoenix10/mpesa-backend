import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityPriority } from './activity-priority.enum';

@InputType()
export class NestedEnumActivityPriorityNullableFilter {

    @Field(() => ActivityPriority, {nullable:true})
    equals?: keyof typeof ActivityPriority;

    @Field(() => [ActivityPriority], {nullable:true})
    in?: Array<keyof typeof ActivityPriority>;

    @Field(() => [ActivityPriority], {nullable:true})
    notIn?: Array<keyof typeof ActivityPriority>;

    @Field(() => NestedEnumActivityPriorityNullableFilter, {nullable:true})
    not?: NestedEnumActivityPriorityNullableFilter;
}
