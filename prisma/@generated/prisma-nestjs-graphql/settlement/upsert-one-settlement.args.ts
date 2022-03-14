import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementCreateInput } from './settlement-create.input';
import { SettlementUpdateInput } from './settlement-update.input';

@ArgsType()
export class UpsertOneSettlementArgs {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementCreateInput, {nullable:false})
    create!: SettlementCreateInput;

    @Field(() => SettlementUpdateInput, {nullable:false})
    update!: SettlementUpdateInput;
}
