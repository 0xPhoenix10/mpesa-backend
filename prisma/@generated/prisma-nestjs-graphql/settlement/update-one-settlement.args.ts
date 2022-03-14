import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementUpdateInput } from './settlement-update.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';

@ArgsType()
export class UpdateOneSettlementArgs {

    @Field(() => SettlementUpdateInput, {nullable:false})
    data!: SettlementUpdateInput;

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;
}
