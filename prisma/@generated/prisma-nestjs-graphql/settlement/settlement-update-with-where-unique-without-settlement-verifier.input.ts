import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithoutSettlementVerifierInput } from './settlement-update-without-settlement-verifier.input';

@InputType()
export class SettlementUpdateWithWhereUniqueWithoutSettlementVerifierInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementUpdateWithoutSettlementVerifierInput, {nullable:false})
    data!: SettlementUpdateWithoutSettlementVerifierInput;
}
