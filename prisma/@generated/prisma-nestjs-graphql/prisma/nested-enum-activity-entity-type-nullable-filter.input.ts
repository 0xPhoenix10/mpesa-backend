import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityEntityType } from './activity-entity-type.enum';

@InputType()
export class NestedEnumActivityEntityTypeNullableFilter {

    @Field(() => ActivityEntityType, {nullable:true})
    equals?: keyof typeof ActivityEntityType;

    @Field(() => [ActivityEntityType], {nullable:true})
    in?: Array<keyof typeof ActivityEntityType>;

    @Field(() => [ActivityEntityType], {nullable:true})
    notIn?: Array<keyof typeof ActivityEntityType>;

    @Field(() => NestedEnumActivityEntityTypeNullableFilter, {nullable:true})
    not?: NestedEnumActivityEntityTypeNullableFilter;
}
