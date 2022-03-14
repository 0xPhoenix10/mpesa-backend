import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletTypesEnum } from './wallet-types.enum';
import { NestedEnumWalletTypesEnumFilter } from './nested-enum-wallet-types-enum-filter.input';

@InputType()
export class EnumWalletTypesEnumFilter {

    @Field(() => WalletTypesEnum, {nullable:true})
    equals?: keyof typeof WalletTypesEnum;

    @Field(() => [WalletTypesEnum], {nullable:true})
    in?: Array<keyof typeof WalletTypesEnum>;

    @Field(() => [WalletTypesEnum], {nullable:true})
    notIn?: Array<keyof typeof WalletTypesEnum>;

    @Field(() => NestedEnumWalletTypesEnumFilter, {nullable:true})
    not?: NestedEnumWalletTypesEnumFilter;
}
