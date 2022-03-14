import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateWithoutSettlementCreatorInput } from './settlement-create-without-settlement-creator.input';
import { SettlementCreateOrConnectWithoutSettlementCreatorInput } from './settlement-create-or-connect-without-settlement-creator.input';
import { SettlementUpsertWithWhereUniqueWithoutSettlementCreatorInput } from './settlement-upsert-with-where-unique-without-settlement-creator.input';
import { SettlementCreateManySettlementCreatorInputEnvelope } from './settlement-create-many-settlement-creator-input-envelope.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithWhereUniqueWithoutSettlementCreatorInput } from './settlement-update-with-where-unique-without-settlement-creator.input';
import { SettlementUpdateManyWithWhereWithoutSettlementCreatorInput } from './settlement-update-many-with-where-without-settlement-creator.input';
import { SettlementScalarWhereInput } from './settlement-scalar-where.input';

@InputType()
export class SettlementUncheckedUpdateManyWithoutSettlementCreatorInput {

    @Field(() => [SettlementCreateWithoutSettlementCreatorInput], {nullable:true})
    create?: Array<SettlementCreateWithoutSettlementCreatorInput>;

    @Field(() => [SettlementCreateOrConnectWithoutSettlementCreatorInput], {nullable:true})
    connectOrCreate?: Array<SettlementCreateOrConnectWithoutSettlementCreatorInput>;

    @Field(() => [SettlementUpsertWithWhereUniqueWithoutSettlementCreatorInput], {nullable:true})
    upsert?: Array<SettlementUpsertWithWhereUniqueWithoutSettlementCreatorInput>;

    @Field(() => SettlementCreateManySettlementCreatorInputEnvelope, {nullable:true})
    createMany?: SettlementCreateManySettlementCreatorInputEnvelope;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    set?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    disconnect?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    delete?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    connect?: Array<SettlementWhereUniqueInput>;

    @Field(() => [SettlementUpdateWithWhereUniqueWithoutSettlementCreatorInput], {nullable:true})
    update?: Array<SettlementUpdateWithWhereUniqueWithoutSettlementCreatorInput>;

    @Field(() => [SettlementUpdateManyWithWhereWithoutSettlementCreatorInput], {nullable:true})
    updateMany?: Array<SettlementUpdateManyWithWhereWithoutSettlementCreatorInput>;

    @Field(() => [SettlementScalarWhereInput], {nullable:true})
    deleteMany?: Array<SettlementScalarWhereInput>;
}
