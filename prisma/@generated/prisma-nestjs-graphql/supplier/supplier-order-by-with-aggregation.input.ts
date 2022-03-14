import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SupplierCountOrderByAggregateInput } from './supplier-count-order-by-aggregate.input';
import { SupplierMaxOrderByAggregateInput } from './supplier-max-order-by-aggregate.input';
import { SupplierMinOrderByAggregateInput } from './supplier-min-order-by-aggregate.input';

@InputType()
export class SupplierOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    supplierId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vendorId?: keyof typeof SortOrder;

    @Field(() => SupplierCountOrderByAggregateInput, {nullable:true})
    _count?: SupplierCountOrderByAggregateInput;

    @Field(() => SupplierMaxOrderByAggregateInput, {nullable:true})
    _max?: SupplierMaxOrderByAggregateInput;

    @Field(() => SupplierMinOrderByAggregateInput, {nullable:true})
    _min?: SupplierMinOrderByAggregateInput;
}
