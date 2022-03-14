import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCode } from './country-code.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumCountryCodeNullableFilter } from './nested-enum-country-code-nullable-filter.input';

@InputType()
export class NestedEnumCountryCodeNullableWithAggregatesFilter {

    @Field(() => CountryCode, {nullable:true})
    equals?: keyof typeof CountryCode;

    @Field(() => [CountryCode], {nullable:true})
    in?: Array<keyof typeof CountryCode>;

    @Field(() => [CountryCode], {nullable:true})
    notIn?: Array<keyof typeof CountryCode>;

    @Field(() => NestedEnumCountryCodeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCountryCodeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumCountryCodeNullableFilter, {nullable:true})
    _min?: NestedEnumCountryCodeNullableFilter;

    @Field(() => NestedEnumCountryCodeNullableFilter, {nullable:true})
    _max?: NestedEnumCountryCodeNullableFilter;
}
