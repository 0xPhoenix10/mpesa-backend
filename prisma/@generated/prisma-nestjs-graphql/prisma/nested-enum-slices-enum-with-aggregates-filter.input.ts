import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SlicesEnum } from './slices.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumSlicesEnumFilter } from './nested-enum-slices-enum-filter.input';

@InputType()
export class NestedEnumSlicesEnumWithAggregatesFilter {

    @Field(() => SlicesEnum, {nullable:true})
    equals?: keyof typeof SlicesEnum;

    @Field(() => [SlicesEnum], {nullable:true})
    in?: Array<keyof typeof SlicesEnum>;

    @Field(() => [SlicesEnum], {nullable:true})
    notIn?: Array<keyof typeof SlicesEnum>;

    @Field(() => NestedEnumSlicesEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSlicesEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumSlicesEnumFilter, {nullable:true})
    _min?: NestedEnumSlicesEnumFilter;

    @Field(() => NestedEnumSlicesEnumFilter, {nullable:true})
    _max?: NestedEnumSlicesEnumFilter;
}
