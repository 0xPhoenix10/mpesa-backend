import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SettlementWhereInput } from './settlement-where.input';

@InputType()
export class SettlementRelationFilter {

    @Field(() => SettlementWhereInput, {nullable:true})
    is?: SettlementWhereInput;

    @Field(() => SettlementWhereInput, {nullable:true})
    isNot?: SettlementWhereInput;
}
