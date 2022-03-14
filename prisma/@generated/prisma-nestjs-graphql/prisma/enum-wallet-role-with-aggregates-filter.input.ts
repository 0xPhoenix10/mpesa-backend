import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRole } from './wallet-role.enum';
import { NestedEnumWalletRoleWithAggregatesFilter } from './nested-enum-wallet-role-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumWalletRoleFilter } from './nested-enum-wallet-role-filter.input';

@InputType()
export class EnumWalletRoleWithAggregatesFilter {

    @Field(() => WalletRole, {nullable:true})
    equals?: keyof typeof WalletRole;

    @Field(() => [WalletRole], {nullable:true})
    in?: Array<keyof typeof WalletRole>;

    @Field(() => [WalletRole], {nullable:true})
    notIn?: Array<keyof typeof WalletRole>;

    @Field(() => NestedEnumWalletRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWalletRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumWalletRoleFilter, {nullable:true})
    _min?: NestedEnumWalletRoleFilter;

    @Field(() => NestedEnumWalletRoleFilter, {nullable:true})
    _max?: NestedEnumWalletRoleFilter;
}
