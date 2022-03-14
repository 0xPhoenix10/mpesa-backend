import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereInput } from './settlement-where.input';

@InputType()
export class SettlementListRelationFilter {

    @Field(() => SettlementWhereInput, {nullable:true})
    every?: SettlementWhereInput;

    @Field(() => SettlementWhereInput, {nullable:true})
    some?: SettlementWhereInput;

    @Field(() => SettlementWhereInput, {nullable:true})
    none?: SettlementWhereInput;
}
