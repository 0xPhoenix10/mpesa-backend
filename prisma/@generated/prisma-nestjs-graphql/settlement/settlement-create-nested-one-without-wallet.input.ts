import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateWithoutWalletInput } from './settlement-create-without-wallet.input';
import { SettlementCreateOrConnectWithoutWalletInput } from './settlement-create-or-connect-without-wallet.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';

@InputType()
export class SettlementCreateNestedOneWithoutWalletInput {

    @Field(() => SettlementCreateWithoutWalletInput, {nullable:true})
    create?: SettlementCreateWithoutWalletInput;

    @Field(() => SettlementCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: SettlementCreateOrConnectWithoutWalletInput;

    @Field(() => SettlementWhereUniqueInput, {nullable:true})
    connect?: SettlementWhereUniqueInput;
}
