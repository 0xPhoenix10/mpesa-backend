import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityEntityType } from './activity-entity-type.enum';
import { NestedEnumActivityEntityTypeNullableFilter } from './nested-enum-activity-entity-type-nullable-filter.input';

@InputType()
export class EnumActivityEntityTypeNullableFilter {

    @Field(() => ActivityEntityType, {nullable:true})
    equals?: keyof typeof ActivityEntityType;

    @Field(() => [ActivityEntityType], {nullable:true})
    in?: Array<keyof typeof ActivityEntityType>;

    @Field(() => [ActivityEntityType], {nullable:true})
    notIn?: Array<keyof typeof ActivityEntityType>;

    @Field(() => NestedEnumActivityEntityTypeNullableFilter, {nullable:true})
    not?: NestedEnumActivityEntityTypeNullableFilter;
}
