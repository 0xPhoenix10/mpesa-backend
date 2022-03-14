import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutSettlementDefaultInput } from './wallet-create-without-settlement-default.input';
import { WalletCreateOrConnectWithoutSettlementDefaultInput } from './wallet-create-or-connect-without-settlement-default.input';
import { WalletUpsertWithWhereUniqueWithoutSettlementDefaultInput } from './wallet-upsert-with-where-unique-without-settlement-default.input';
import { WalletCreateManySettlementDefaultInputEnvelope } from './wallet-create-many-settlement-default-input-envelope.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithWhereUniqueWithoutSettlementDefaultInput } from './wallet-update-with-where-unique-without-settlement-default.input';
import { WalletUpdateManyWithWhereWithoutSettlementDefaultInput } from './wallet-update-many-with-where-without-settlement-default.input';
import { WalletScalarWhereInput } from './wallet-scalar-where.input';

@InputType()
export class WalletUpdateManyWithoutSettlementDefaultInput {

    @Field(() => [WalletCreateWithoutSettlementDefaultInput], {nullable:true})
    create?: Array<WalletCreateWithoutSettlementDefaultInput>;

    @Field(() => [WalletCreateOrConnectWithoutSettlementDefaultInput], {nullable:true})
    connectOrCreate?: Array<WalletCreateOrConnectWithoutSettlementDefaultInput>;

    @Field(() => [WalletUpsertWithWhereUniqueWithoutSettlementDefaultInput], {nullable:true})
    upsert?: Array<WalletUpsertWithWhereUniqueWithoutSettlementDefaultInput>;

    @Field(() => WalletCreateManySettlementDefaultInputEnvelope, {nullable:true})
    createMany?: WalletCreateManySettlementDefaultInputEnvelope;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    set?: Array<WalletWhereUniqueInput>;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    disconnect?: Array<WalletWhereUniqueInput>;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    delete?: Array<WalletWhereUniqueInput>;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    connect?: Array<WalletWhereUniqueInput>;

    @Field(() => [WalletUpdateWithWhereUniqueWithoutSettlementDefaultInput], {nullable:true})
    update?: Array<WalletUpdateWithWhereUniqueWithoutSettlementDefaultInput>;

    @Field(() => [WalletUpdateManyWithWhereWithoutSettlementDefaultInput], {nullable:true})
    updateMany?: Array<WalletUpdateManyWithWhereWithoutSettlementDefaultInput>;

    @Field(() => [WalletScalarWhereInput], {nullable:true})
    deleteMany?: Array<WalletScalarWhereInput>;
}
