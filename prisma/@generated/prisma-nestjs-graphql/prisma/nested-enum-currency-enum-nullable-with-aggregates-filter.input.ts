import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyEnum } from './currency.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumCurrencyEnumNullableFilter } from './nested-enum-currency-enum-nullable-filter.input';

@InputType()
export class NestedEnumCurrencyEnumNullableWithAggregatesFilter {

    @Field(() => CurrencyEnum, {nullable:true})
    equals?: keyof typeof CurrencyEnum;

    @Field(() => [CurrencyEnum], {nullable:true})
    in?: Array<keyof typeof CurrencyEnum>;

    @Field(() => [CurrencyEnum], {nullable:true})
    notIn?: Array<keyof typeof CurrencyEnum>;

    @Field(() => NestedEnumCurrencyEnumNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCurrencyEnumNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumCurrencyEnumNullableFilter, {nullable:true})
    _min?: NestedEnumCurrencyEnumNullableFilter;

    @Field(() => NestedEnumCurrencyEnumNullableFilter, {nullable:true})
    _max?: NestedEnumCurrencyEnumNullableFilter;
}
