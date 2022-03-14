import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierWhereInput } from './supplier-where.input';
import { SupplierOrderByWithRelationInput } from './supplier-order-by-with-relation.input';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SupplierCountAggregateInput } from './supplier-count-aggregate.input';
import { SupplierMinAggregateInput } from './supplier-min-aggregate.input';
import { SupplierMaxAggregateInput } from './supplier-max-aggregate.input';

@ArgsType()
export class SupplierAggregateArgs {

    @Field(() => SupplierWhereInput, {nullable:true})
    where?: SupplierWhereInput;

    @Field(() => [SupplierOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SupplierOrderByWithRelationInput>;

    @Field(() => SupplierWhereUniqueInput, {nullable:true})
    cursor?: SupplierWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SupplierCountAggregateInput, {nullable:true})
    _count?: SupplierCountAggregateInput;

    @Field(() => SupplierMinAggregateInput, {nullable:true})
    _min?: SupplierMinAggregateInput;

    @Field(() => SupplierMaxAggregateInput, {nullable:true})
    _max?: SupplierMaxAggregateInput;
}
