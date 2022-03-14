import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementUpdateWithoutSettlementCreatorInput } from './settlement-update-without-settlement-creator.input';

@InputType()
export class SettlementUpdateWithWhereUniqueWithoutSettlementCreatorInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementUpdateWithoutSettlementCreatorInput, {nullable:false})
    data!: SettlementUpdateWithoutSettlementCreatorInput;
}
