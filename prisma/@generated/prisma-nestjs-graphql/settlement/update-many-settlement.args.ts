import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementUpdateManyMutationInput } from './settlement-update-many-mutation.input';
import { SettlementWhereInput } from './settlement-where.input';

@ArgsType()
export class UpdateManySettlementArgs {

    @Field(() => SettlementUpdateManyMutationInput, {nullable:false})
    data!: SettlementUpdateManyMutationInput;

    @Field(() => SettlementWhereInput, {nullable:true})
    where?: SettlementWhereInput;
}
