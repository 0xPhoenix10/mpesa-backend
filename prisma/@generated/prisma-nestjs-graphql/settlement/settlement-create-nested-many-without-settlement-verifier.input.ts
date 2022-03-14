import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateWithoutSettlementVerifierInput } from './settlement-create-without-settlement-verifier.input';
import { SettlementCreateOrConnectWithoutSettlementVerifierInput } from './settlement-create-or-connect-without-settlement-verifier.input';
import { SettlementCreateManySettlementVerifierInputEnvelope } from './settlement-create-many-settlement-verifier-input-envelope.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';

@InputType()
export class SettlementCreateNestedManyWithoutSettlementVerifierInput {

    @Field(() => [SettlementCreateWithoutSettlementVerifierInput], {nullable:true})
    create?: Array<SettlementCreateWithoutSettlementVerifierInput>;

    @Field(() => [SettlementCreateOrConnectWithoutSettlementVerifierInput], {nullable:true})
    connectOrCreate?: Array<SettlementCreateOrConnectWithoutSettlementVerifierInput>;

    @Field(() => SettlementCreateManySettlementVerifierInputEnvelope, {nullable:true})
    createMany?: SettlementCreateManySettlementVerifierInputEnvelope;

    @Field(() => [SettlementWhereUniqueInput], {nullable:true})
    connect?: Array<SettlementWhereUniqueInput>;
}
