import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCode } from './country-code.enum';

@InputType()
export class NestedEnumCountryCodeNullableFilter {

    @Field(() => CountryCode, {nullable:true})
    equals?: keyof typeof CountryCode;

    @Field(() => [CountryCode], {nullable:true})
    in?: Array<keyof typeof CountryCode>;

    @Field(() => [CountryCode], {nullable:true})
    notIn?: Array<keyof typeof CountryCode>;

    @Field(() => NestedEnumCountryCodeNullableFilter, {nullable:true})
    not?: NestedEnumCountryCodeNullableFilter;
}
