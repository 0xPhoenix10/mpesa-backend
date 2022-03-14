import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementCreateManySettlementVerifierInput } from './settlement-create-many-settlement-verifier.input';

@InputType()
export class SettlementCreateManySettlementVerifierInputEnvelope {

    @Field(() => [SettlementCreateManySettlementVerifierInput], {nullable:false})
    data!: Array<SettlementCreateManySettlementVerifierInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
