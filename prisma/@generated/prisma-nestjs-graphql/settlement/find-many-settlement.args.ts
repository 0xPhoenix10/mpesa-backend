import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettlementWhereInput } from './settlement-where.input';
import { SettlementOrderByWithRelationInput } from './settlement-order-by-with-relation.input';
import { SettlementWhereUniqueInput } from './settlement-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SettlementScalarFieldEnum } from './settlement-scalar-field.enum';

@ArgsType()
export class FindManySettlementArgs {

    @Field(() => SettlementWhereInput, {nullable:true})
    where?: SettlementWhereInput;

    @Field(() => [SettlementOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SettlementOrderByWithRelationInput>;

    @Field(() => SettlementWhereUniqueInput, {nullable:true})
    cursor?: SettlementWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SettlementScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SettlementScalarFieldEnum>;
}
