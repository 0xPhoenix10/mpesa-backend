import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateWithoutSettlementVerifierInput } from './settlement-create-without-settlement-verifier.input';
import { SettlementCreateOrConnectWithoutSettlementVerifierInput } from './settlement-create-or-connect-without-settlement-verifier.input';
import { SettlementUpsertWithWhereUniqueWithoutSettlementVerifierInput } from './settlement-upsert-with-where-unique-without-settlement-verifier.input';
import { SettlementCreateManySettlementVerifierInputEnvelope } from './settlement-create-many-settlement-verifier-input-envelope.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithWhereUniqueWithoutSettlementVerifierInput } from './settlement-update-with-where-unique-without-settlement-verifier.input';
import { SettlementUpdateManyWithWhereWithoutSettlementVerifierInput } from './settlement-update-many-with-where-without-settlement-verifier.input';
import { SettlementScalarWhereInput } from './settlement-scalar-where.input';

@InputType()
export class SettlementUncheckedUpdateManyWithoutSettlementVerifierInput {

    @Field(() => [SettlementCreateWithoutSettlementVerifierInput], {nullable:true})
    create?: Array<SettlementCreateWithoutSettlementVerifierInput>;

    @Field(() => [SettlementCreateOrConnectWithoutSettlementVerifierInput], {nullable:true})
    connectOrCreate?: Array<SettlementCreateOrConnectWithoutSettlementVerifierInput>;

    @Field(() => [SettlementUpsertWithWhereUniqueWithoutSettlementVerifierInput], {nullable:true})
    upsert?: Array<SettlementUpsertWithWhereUniqueWithoutSettlementVerifierInput>;

    @Field(() => SettlementCreateManySettlementVerifierInputEnvelope, {nullable:true})
    createMany?: SettlementCreateManySettlementVerifierInputEnvelope;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    set?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    disconnect?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    delete?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    connect?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementUpdateWithWhereUniqueWithoutSettlementVerifierInput], {nullable:true})
    update?: Array<SettlementUpdateWithWhereUniqueWithoutSettlementVerifierInput>;

    @Field(() => [SettlementUpdateManyWithWhereWithoutSettlementVerifierInput], {nullable:true})
    updateMany?: Array<SettlementUpdateManyWithWhereWithoutSettlementVerifierInput>;

    @Field(() => [SettlementScalarWhereInput], {nullable:true})
    deleteMany?: Array<SettlementScalarWhereInput>;
}
