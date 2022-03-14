import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateWithoutWalletInput } from './settlement-create-without-wallet.input';
import { SettlementCreateOrConnectWithoutWalletInput } from './settlement-create-or-connect-without-wallet.input';
import { SettlementUpsertWithWhereUniqueWithoutWalletInput } from './settlement-upsert-with-where-unique-without-wallet.input';
import { SettlementCreateManyWalletInputEnvelope } from './settlement-create-many-wallet-input-envelope.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithWhereUniqueWithoutWalletInput } from './settlement-update-with-where-unique-without-wallet.input';
import { SettlementUpdateManyWithWhereWithoutWalletInput } from './settlement-update-many-with-where-without-wallet.input';
import { SettlementScalarWhereInput } from './settlement-scalar-where.input';

@InputType()
export class SettlementUpdateManyWithoutWalletInput {

    @Field(() => [SettlementCreateWithoutWalletInput], {nullable:true})
    create?: Array<SettlementCreateWithoutWalletInput>;

    @Field(() => [SettlementCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<SettlementCreateOrConnectWithoutWalletInput>;

    @Field(() => [SettlementUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<SettlementUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => SettlementCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: SettlementCreateManyWalletInputEnvelope;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    set?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    disconnect?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    delete?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    connect?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<SettlementUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [SettlementUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<SettlementUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [SettlementScalarWhereInput], {nullable:true})
    deleteMany?: Array<SettlementScalarWhereInput>;
}
