import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyEnum } from './currency.enum';
import { NestedEnumCurrencyEnumFilter } from './nested-enum-currency-enum-filter.input';

@InputType()
export class EnumCurrencyEnumFilter {

    @Field(() => CurrencyEnum, {nullable:true})
    equals?: keyof typeof CurrencyEnum;

    @Field(() => [CurrencyEnum], {nullable:true})
    in?: Array<keyof typeof CurrencyEnum>;

    @Field(() => [CurrencyEnum], {nullable:true})
    notIn?: Array<keyof typeof CurrencyEnum>;

    @Field(() => NestedEnumCurrencyEnumFilter, {nullable:true})
    not?: NestedEnumCurrencyEnumFilter;
}
