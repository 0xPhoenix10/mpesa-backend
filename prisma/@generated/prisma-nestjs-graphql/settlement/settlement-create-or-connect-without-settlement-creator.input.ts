import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { SettlementCreateWithoutSettlementCreatorInput } from './settlement-create-without-settlement-creator.input';

@InputType()
export class SettlementCreateOrConnectWithoutSettlementCreatorInput {

    @Field(() => SettlementWhereUniqueInput, {nullable:false})
    where!: SettlementWhereUniqueInput;

    @Field(() => SettlementCreateWithoutSettlementCreatorInput, {nullable:false})
    create!: SettlementCreateWithoutSettlementCreatorInput;
}
