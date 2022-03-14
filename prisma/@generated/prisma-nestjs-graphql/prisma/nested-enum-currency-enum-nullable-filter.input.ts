import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyEnum } from './currency.enum';

@InputType()
export class NestedEnumCurrencyEnumNullableFilter {

    @Field(() => CurrencyEnum, {nullable:true})
    equals?: keyof typeof CurrencyEnum;

    @Field(() => [CurrencyEnum], {nullable:true})
    in?: Array<keyof typeof CurrencyEnum>;

    @Field(() => [CurrencyEnum], {nullable:true})
    notIn?: Array<keyof typeof CurrencyEnum>;

    @Field(() => NestedEnumCurrencyEnumNullableFilter, {nullable:true})
    not?: NestedEnumCurrencyEnumNullableFilter;
}
