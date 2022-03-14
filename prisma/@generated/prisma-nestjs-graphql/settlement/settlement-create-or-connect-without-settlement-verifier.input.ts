import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementCreateWithoutSettlementVerifierInput } from './settlement-create-without-settlement-verifier.input';

@InputType()
export class SettlementCreateOrConnectWithoutSettlementVerifierInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementCreateWithoutSettlementVerifierInput, {nullable:false})
    create!: SettlementCreateWithoutSettlementVerifierInput;
}
