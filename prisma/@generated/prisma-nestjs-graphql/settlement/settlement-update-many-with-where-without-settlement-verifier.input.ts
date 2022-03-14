import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementScalarWhereInput } from './settlement-scalar-where.input';
import { SettlementUpdateManyMutationInput } from './settlement-update-many-mutation.input';

@InputType()
export class SettlementUpdateManyWithWhereWithoutSettlementVerifierInput {

    @Field(() => SettlementScalarWhereInput, {nullable:false})
    where!: SettlementScalarWhereInput;

    @Field(() => SettlementUpdateManyMutationInput, {nullable:false})
    data!: SettlementUpdateManyMutationInput;
}
