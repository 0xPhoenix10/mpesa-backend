import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SupplierWhereInput } from './supplier-where.input';
import { SupplierOrderByWithAggregationInput } from './supplier-order-by-with-aggregation.input';
import { SupplierScalarFieldEnum } from './supplier-scalar-field.enum';
import { SupplierScalarWhereWithAggregatesInput } from './supplier-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SupplierCountAggregateInput } from './supplier-count-aggregate.input';
import { SupplierMinAggregateInput } from './supplier-min-aggregate.input';
import { SupplierMaxAggregateInput } from './supplier-max-aggregate.input';

@ArgsType()
export class SupplierGroupByArgs {

    @Field(() => SupplierWhereInput, {nullable:true})
    where?: SupplierWhereInput;

    @Field(() => [SupplierOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SupplierOrderByWithAggregationInput>;

    @Field(() => [SupplierScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SupplierScalarFieldEnum>;

    @Field(() => SupplierScalarWhereWithAggregatesInput, {nullable:true})
    having?: SupplierScalarWhereWithAggregatesInput;

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
