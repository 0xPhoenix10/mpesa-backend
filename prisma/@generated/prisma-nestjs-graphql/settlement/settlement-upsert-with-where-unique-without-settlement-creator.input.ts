import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithoutSettlementCreatorInput } from './settlement-update-without-settlement-creator.input';
import { SettlementCreateWithoutSettlementCreatorInput } from './settlement-create-without-settlement-creator.input';

@InputType()
export class SettlementUpsertWithWhereUniqueWithoutSettlementCreatorInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementUpdateWithoutSettlementCreatorInput, {nullable:false})
    update!: SettlementUpdateWithoutSettlementCreatorInput;

    @Field(() => SettlementCreateWithoutSettlementCreatorInput, {nullable:false})
    create!: SettlementCreateWithoutSettlementCreatorInput;
}
