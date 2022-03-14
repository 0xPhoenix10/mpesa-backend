import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletRole } from './wallet-role.enum';

@InputType()
export class NestedEnumWalletRoleFilter {

    @Field(() => WalletRole, {nullable:true})
    equals?: keyof typeof WalletRole;

    @Field(() => [WalletRole], {nullable:true})
    in?: Array<keyof typeof WalletRole>;

    @Field(() => [WalletRole], {nullable:true})
    notIn?: Array<keyof typeof WalletRole>;

    @Field(() => NestedEnumWalletRoleFilter, {nullable:true})
    not?: NestedEnumWalletRoleFilter;
}
