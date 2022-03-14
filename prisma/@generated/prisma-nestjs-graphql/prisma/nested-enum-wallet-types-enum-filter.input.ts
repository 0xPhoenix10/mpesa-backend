import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletTypesEnum } from './wallet-types.enum';

@InputType()
export class NestedEnumWalletTypesEnumFilter {

    @Field(() => WalletTypesEnum, {nullable:true})
    equals?: keyof typeof WalletTypesEnum;

    @Field(() => [WalletTypesEnum], {nullable:true})
    in?: Array<keyof typeof WalletTypesEnum>;

    @Field(() => [WalletTypesEnum], {nullable:true})
    notIn?: Array<keyof typeof WalletTypesEnum>;

    @Field(() => NestedEnumWalletTypesEnumFilter, {nullable:true})
    not?: NestedEnumWalletTypesEnumFilter;
}
