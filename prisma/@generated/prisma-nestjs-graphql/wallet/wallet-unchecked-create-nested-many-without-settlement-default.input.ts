import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutSettlementDefaultInput } from './wallet-create-without-settlement-default.input';
import { WalletCreateOrConnectWithoutSettlementDefaultInput } from './wallet-create-or-connect-without-settlement-default.input';
import { WalletCreateManySettlementDefaultInputEnvelope } from './wallet-create-many-settlement-default-input-envelope.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletUncheckedCreateNestedManyWithoutSettlementDefaultInput {

    @Field(() => [WalletCreateWithoutSettlementDefaultInput], {nullable:true})
    create?: Array<WalletCreateWithoutSettlementDefaultInput>;

    @Field(() => [WalletCreateOrConnectWithoutSettlementDefaultInput], {nullable:true})
    connectOrCreate?: Array<WalletCreateOrConnectWithoutSettlementDefaultInput>;

    @Field(() => WalletCreateManySettlementDefaultInputEnvelope, {nullable:true})
    createMany?: WalletCreateManySettlementDefaultInputEnvelope;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    connect?: Array<WalletWhereUniqueInput>;
}
