import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletTypesEnum } from './wallet-types.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumWalletTypesEnumFilter } from './nested-enum-wallet-types-enum-filter.input';

@InputType()
export class NestedEnumWalletTypesEnumWithAggregatesFilter {

    @Field(() => WalletTypesEnum, {nullable:true})
    equals?: keyof typeof WalletTypesEnum;

    @Field(() => [WalletTypesEnum], {nullable:true})
    in?: Array<keyof typeof WalletTypesEnum>;

    @Field(() => [WalletTypesEnum], {nullable:true})
    notIn?: Array<keyof typeof WalletTypesEnum>;

    @Field(() => NestedEnumWalletTypesEnumWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWalletTypesEnumWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumWalletTypesEnumFilter, {nullable:true})
    _min?: NestedEnumWalletTypesEnumFilter;

    @Field(() => NestedEnumWalletTypesEnumFilter, {nullable:true})
    _max?: NestedEnumWalletTypesEnumFilter;
}
