import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateWithoutWalletInput } from './settlement-create-without-wallet.input';
import { SettlementCreateOrConnectWithoutWalletInput } from './settlement-create-or-connect-without-wallet.input';
import { SettlementUpsertWithoutWalletInput } from './settlement-upsert-without-wallet.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithoutWalletInput } from './settlement-update-without-wallet.input';

@InputType()
export class SettlementUpdateOneWithoutWalletInput {

    @Field(() => SettlementCreateWithoutWalletInput, {nullable:true})
    create?: SettlementCreateWithoutWalletInput;

    @Field(() => SettlementCreateOrConnectWithoutWalletInput, {nullable:true})
    connectOrCreate?: SettlementCreateOrConnectWithoutWalletInput;

    @Field(() => SettlementUpsertWithoutWalletInput, {nullable:true})
    upsert?: SettlementUpsertWithoutWalletInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SettlementWhereUniqueInput, {nullable:true})
    connect?: SettlementWhereUniqueInput;

    @Field(() => SettlementUpdateWithoutWalletInput, {nullable:true})
    update?: SettlementUpdateWithoutWalletInput;
}
