import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityEntityType } from './activity-entity-type.enum';
import { NestedEnumActivityEntityTypeNullableWithAggregatesFilter } from './nested-enum-activity-entity-type-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumActivityEntityTypeNullableFilter } from './nested-enum-activity-entity-type-nullable-filter.input';

@InputType()
export class EnumActivityEntityTypeNullableWithAggregatesFilter {

    @Field(() => ActivityEntityType, {nullable:true})
    equals?: keyof typeof ActivityEntityType;

    @Field(() => [ActivityEntityType], {nullable:true})
    in?: Array<keyof typeof ActivityEntityType>;

    @Field(() => [ActivityEntityType], {nullable:true})
    notIn?: Array<keyof typeof ActivityEntityType>;

    @Field(() => NestedEnumActivityEntityTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumActivityEntityTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumActivityEntityTypeNullableFilter, {nullable:true})
    _min?: NestedEnumActivityEntityTypeNullableFilter;

    @Field(() => NestedEnumActivityEntityTypeNullableFilter, {nullable:true})
    _max?: NestedEnumActivityEntityTypeNullableFilter;
}
