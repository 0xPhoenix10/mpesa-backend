import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateWithoutSettlementCreatorInput } from './settlement-create-without-settlement-creator.input';
import { SettlementCreateOrConnectWithoutSettlementCreatorInput } from './settlement-create-or-connect-without-settlement-creator.input';
import { SettlementCreateManySettlementCreatorInputEnvelope } from './settlement-create-many-settlement-creator-input-envelope.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';

@InputType()
export class SettlementUncheckedCreateNestedManyWithoutSettlementCreatorInput {

    @Field(() => [SettlementCreateWithoutSettlementCreatorInput], {nullable:true})
    create?: Array<SettlementCreateWithoutSettlementCreatorInput>;

    @Field(() => [SettlementCreateOrConnectWithoutSettlementCreatorInput], {nullable:true})
    connectOrCreate?: Array<SettlementCreateOrConnectWithoutSettlementCreatorInput>;

    @Field(() => SettlementCreateManySettlementCreatorInputEnvelope, {nullable:true})
    createMany?: SettlementCreateManySettlementCreatorInputEnvelope;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    connect?: Array<SettlementWhereUniqueInput>;
}
