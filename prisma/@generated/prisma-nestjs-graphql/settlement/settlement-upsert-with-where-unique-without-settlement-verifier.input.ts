import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithoutSettlementVerifierInput } from './settlement-update-without-settlement-verifier.input';
import { SettlementCreateWithoutSettlementVerifierInput } from './settlement-create-without-settlement-verifier.input';

@InputType()
export class SettlementUpsertWithWhereUniqueWithoutSettlementVerifierInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementUpdateWithoutSettlementVerifierInput, {nullable:false})
    update!: SettlementUpdateWithoutSettlementVerifierInput;

    @Field(() => SettlementCreateWithoutSettlementVerifierInput, {nullable:false})
    create!: SettlementCreateWithoutSettlementVerifierInput;
}
