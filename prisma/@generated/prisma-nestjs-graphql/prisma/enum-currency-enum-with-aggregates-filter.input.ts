import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyEnum } from './currency.enum';
import { NestedEnumCurrencyEnumWithAggregatesFilter } from './nested-enum-currency-enum-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCurrencyEnumFilter } from './nested-enum-currency-enum-filter.input';

@InputType()
export class EnumCurrencyEnumWithAggregatesFilter {

    @Field(() => CurrencyEnum, {nullable:true})
    equals?: keyof typeof CurrencyEnum;

    @Field(() => [CurrencyEnum], {nullable:true})
    in?: Array<keyof typeof CurrencyEnum>;

    @Field(() => [CurrencyEnum], {nullable:true})
    notIn?: Array<keyof typeof CurrencyEnum>;

    @Field(() => NestedEnumCurrencyEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCurrencyEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCurrencyEnumFilter, {nullable:true})
    _min?: NestedEnumCurrencyEnumFilter;

    @Field(() => NestedEnumCurrencyEnumFilter, {nullable:true})
    _max?: NestedEnumCurrencyEnumFilter;
}
