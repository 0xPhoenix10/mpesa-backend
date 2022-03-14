import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateWithoutWalletInput } from './settlement-create-without-wallet.input';
import { SettlementCreateOrConnectWithoutWalletInput } from './settlement-create-or-connect-without-wallet.input';
import { SettlementCreateManyWalletInputEnvelope } from './settlement-create-many-wallet-input-envelope.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';

@InputType()
export class SettlementCreateNestedManyWithoutWalletInput {

    @Field(() => [SettlementCreateWithoutWalletInput], {nullable:true})
    create?: Array<SettlementCreateWithoutWalletInput>;

    @Field(() => [SettlementCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<SettlementCreateOrConnectWithoutWalletInput>;

    @Field(() => SettlementCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: SettlementCreateManyWalletInputEnvelope;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    connect?: Array<SettlementWhereUniqueInput>;
}
