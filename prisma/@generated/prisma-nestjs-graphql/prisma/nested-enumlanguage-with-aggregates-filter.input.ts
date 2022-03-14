import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language } from './language.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumlanguageFilter } from './nested-enumlanguage-filter.input';

@InputType()
export class NestedEnumlanguageWithAggregatesFilter {

    @Field(() => language, {nullable:true})
    equals?: keyof typeof language;

    @Field(() => [language], {nullable:true})
    in?: Array<keyof typeof language>;

    @Field(() => [language], {nullable:true})
    notIn?: Array<keyof typeof language>;

    @Field(() => NestedEnumlanguageWithAggregatesFilter, {nullable:true})
    not?: NestedEnumlanguageWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumlanguageFilter, {nullable:true})
    _min?: NestedEnumlanguageFilter;

    @Field(() => NestedEnumlanguageFilter, {nullable:true})
    _max?: NestedEnumlanguageFilter;
}
